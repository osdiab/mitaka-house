// --------------
// resizing logic
// --------------
$(window).resize(function() {
  // affects document height, in document flow: resize first.
  $('#left').css({
    width: $('#name').height()
  });

  $('#me').css({
    height: $('#left').height() + parseInt($('#left').css('padding-top'))
  });

  // not in document flow, dependent on positions; do last
  $('#credit_bg').css({
    height: $('#credit_contents').height(),
    width: $('#credit_contents').width(),
    left: $('#credit_contents').offset().left,
    top: $('#credit_contents').offset().top
  });

  $('#shade').css({
    height: $('body').height()
  });

  $('#logo_stripe').css({
    top: $('#logo_pane').position().top,
    height: $('#logo_pane').outerHeight()
  });
});

$(document).ready(function() {
  $('img').each(function(index, elem) {
    $(elem).load(function() {
      $(window).resize();
    });
  });
});

$(window).load(function() {
  $(window).resize();
});

// credit: Drew Baker, bit.ly/1fcLElK
// replace img-tagged svgs with the same svg's inlined.
// Allows manipulation of svg's on the DOM, does not dispatch new requests
// since they should be cached.
function inline_all_svg_img()
{
  $('.service_img').each(function(index, elem) {
    elem = $(elem);
    var img_id = elem.attr('id');
    var img_class = elem.attr('class');
    var img_url = elem.attr('src');

    $.get(img_url, function(data) {
      // Get the SVG tag, ignore the rest
      var svg = $(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof img_id !== 'undefined') {
        svg = svg.attr('id', img_id);
      }
      // Add replaced image's classes to the new SVG
      if (typeof img_class !== 'undefined') {
        svg = svg.attr('class', img_class);
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      svg = svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      elem.replaceWith(svg);

    }, 'xml');
  });
}

function add_randomized_link_listeners() {
  $('.randomized').each(function(index, elem) {
    $(elem).on('click', function(e) {
        e.preventDefault();
        var url = $(this).prop('href');
        window.location.href = url.split('?')[0];
    });
  });
}

// --------------------
// initialization logic
// --------------------
$(document).ready(function() {
  if (Modernizr.svg) {
    inline_all_svg_img();
  }
  add_randomized_link_listeners();
});

// -----------------
// Highlighter class
// -----------------
// Requires jquery-color for svg highlighting
// Add to application js:
// jQuery.Color.hook('fill stroke');

var Highlighter = function(svg) {
  var svg_enabled = svg;
  var types = ['fill', 'stroke'];
  var normal_color = '#FFF';
  var highlight_color = '#FF6D00';
  var animation_speed = 200;
  var cache = {};
  types.forEach(function(type, index, arr) {
    cache[type] = [];
  });

  // for fallback to pngs
  var highlight_png = function(service, id, highlight) {
    var img_path = '/img/service/' + service;
    if (highlight) {
      img_path += '-hl';
    }

    img_path += '.png';
    $(elem).attr('data', img_path);
  };

  // (un)highlights a particular svg element
  var update_svg_elem = function(elem, type, highlight) {
    var color = normal_color;
    if (highlight) {
      color = highlight_color;
    }

    var change = {};
    change[type] = color;
    $(elem).animate(change, animation_speed);
  };

  // finds all svgs to (un)highlight for a service, and executes
  var highlight_svg = function(service, elem, highlight) {
    var svg_elem = $(elem).get()[0].contentDocument;

    types.forEach(function(type, index, arr) {
      if (cache[type][service] !== undefined) {
        cache[type][service].forEach(function(elem, index, arr) {
          update_svg_elem(elem, type, highlight);
        });
      } else {
        cache[type][service] = [];
        $(svg_elem).find('*[' + type + ']').each(function(index, elem) {
          // cache
          cache[type][service].push(elem);
          // act
          update_svg_elem(elem, type, highlight);
        });
      }
    });
  };

  /**
   * Highlights a service button
   * @param {string} service
   * @param {bool} highlight
   */
  this.highlight_service = function(service, highlight) {
    var elem = $('#' + service + '-btn');

    var src = elem.attr('data');
    var type = $(elem).attr('type');
    if (type === undefined) return;
    if (type === 'image/svg+xml') {
      if (svg_enabled) {
        highlight_svg(service, elem, highlight);
      }
    } else if (type === 'image/png') {
      highlight_png(service, elem, highlight);
    }
  };
};

// turn svg highlighting off, since it's being displayed inline
highlighter = new Highlighter(false);
