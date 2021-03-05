"use strict";

window.onload = function () {
  var serviceNav = document.querySelectorAll('.study__nav-item');
  serviceNav.forEach(function (item) {
    item.addEventListener('click', function () {
      var currentNav = this;
      toggleNavActive(currentNav);
      hideOther();
      var course = document.getElementById(this.dataset.course);
      showCurrent(course);
    });
  });

  function toggleNavActive(elem) {
    var currentCourse = document.querySelector('.study__nav-item_active');
    currentCourse.classList.toggle('study__nav-item_active');
    elem.classList.toggle('study__nav-item_active');
  }

  function hideOther() {
    var course = document.querySelector('.study__course_active');
    course.classList.remove('study__course_active');
  }

  function showCurrent(elem) {
    elem.classList.toggle('study__course_active');
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInNlcnZpY2VOYXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50TmF2IiwidG9nZ2xlTmF2QWN0aXZlIiwiaGlkZU90aGVyIiwiY291cnNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhc2V0Iiwic2hvd0N1cnJlbnQiLCJlbGVtIiwiY3VycmVudENvdXJzZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFNO0FBRWxCLE1BQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBakI7QUFDQUYsRUFBQUEsVUFBVSxDQUFDRyxPQUFYLENBQW1CLFVBQUFDLElBQUksRUFBSTtBQUN2QkEsSUFBQUEsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3JDLFVBQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUNBQyxNQUFBQSxlQUFlLENBQUNELFVBQUQsQ0FBZjtBQUNBRSxNQUFBQSxTQUFTO0FBQ1QsVUFBSUMsTUFBTSxHQUFHUixRQUFRLENBQUNTLGNBQVQsQ0FBd0IsS0FBS0MsT0FBTCxDQUFhRixNQUFyQyxDQUFiO0FBQ0FHLE1BQUFBLFdBQVcsQ0FBQ0gsTUFBRCxDQUFYO0FBQ0gsS0FORDtBQU9ILEdBUkQ7O0FBVUEsV0FBU0YsZUFBVCxDQUF5Qk0sSUFBekIsRUFBOEI7QUFDMUIsUUFBSUMsYUFBYSxHQUFHYixRQUFRLENBQUNjLGFBQVQsQ0FBdUIseUJBQXZCLENBQXBCO0FBQ0FELElBQUFBLGFBQWEsQ0FBQ0UsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0Isd0JBQS9CO0FBQ0FKLElBQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxNQUFmLENBQXNCLHdCQUF0QjtBQUNIOztBQUNELFdBQVNULFNBQVQsR0FBb0I7QUFDaEIsUUFBSUMsTUFBTSxHQUFHUixRQUFRLENBQUNjLGFBQVQsQ0FBdUIsdUJBQXZCLENBQWI7QUFDQU4sSUFBQUEsTUFBTSxDQUFDTyxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixzQkFBeEI7QUFDSDs7QUFDRCxXQUFTTixXQUFULENBQXFCQyxJQUFyQixFQUEwQjtBQUN0QkEsSUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWVDLE1BQWYsQ0FBc0Isc0JBQXRCO0FBQ0g7QUFFSixDQTFCRCIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IHNlcnZpY2VOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3R1ZHlfX25hdi1pdGVtJyk7XHJcbiAgICBzZXJ2aWNlTmF2LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TmF2ID0gdGhpcztcclxuICAgICAgICAgICAgdG9nZ2xlTmF2QWN0aXZlKGN1cnJlbnROYXYpO1xyXG4gICAgICAgICAgICBoaWRlT3RoZXIoKTtcclxuICAgICAgICAgICAgbGV0IGNvdXJzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YXNldC5jb3Vyc2UpO1xyXG4gICAgICAgICAgICBzaG93Q3VycmVudChjb3Vyc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2QWN0aXZlKGVsZW0pe1xyXG4gICAgICAgIGxldCBjdXJyZW50Q291cnNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0dWR5X19uYXYtaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICBjdXJyZW50Q291cnNlLmNsYXNzTGlzdC50b2dnbGUoJ3N0dWR5X19uYXYtaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ3N0dWR5X19uYXYtaXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpZGVPdGhlcigpe1xyXG4gICAgICAgIGxldCBjb3Vyc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3R1ZHlfX2NvdXJzZV9hY3RpdmUnKTtcclxuICAgICAgICBjb3Vyc2UuY2xhc3NMaXN0LnJlbW92ZSgnc3R1ZHlfX2NvdXJzZV9hY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd0N1cnJlbnQoZWxlbSl7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdzdHVkeV9fY291cnNlX2FjdGl2ZScpXHJcbiAgICB9XHJcblxyXG59Il0sImZpbGUiOiJzZXJ2aWNlcy5qcyJ9