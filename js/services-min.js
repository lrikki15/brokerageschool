"use strict";window.onload=function(){document.querySelectorAll(".study__nav-item").forEach(function(t){t.addEventListener("click",function(){var t;t=this,document.querySelector(".study__nav-item_active").classList.toggle("study__nav-item_active"),t.classList.toggle("study__nav-item_active"),document.querySelector(".study__course_active").classList.remove("study__course_active"),function(t){t.classList.toggle("study__course_active")}(document.getElementById(this.dataset.course))})}),$("#expertplus").magnificPopup({type:"image"})};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW0iLCJ0aGlzIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsInNob3dDdXJyZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhc2V0IiwiY291cnNlIiwiJCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUVBQSxPQUFPQyxPQUFTLFdBQ0dDLFNBQVNDLGlCQUFpQixvQkFDaENDLFFBQVEsU0FBVUMsR0FDM0JBLEVBQUtDLGlCQUFpQixRQUFTLFdBQzdCLElBUXFCQyxFQUFBQSxFQVJKQyxLQVNDTixTQUFTTyxjQUFjLDJCQUM3QkMsVUFBVUMsT0FBTywwQkFDL0JKLEVBQUtHLFVBQVVDLE9BQU8sMEJBSVRULFNBQVNPLGNBQWMseUJBQzdCQyxVQUFVRSxPQUFPLHdCQUcxQixTQUFxQkwsR0FDbkJBLEVBQUtHLFVBQVVDLE9BQU8sd0JBaEJwQkUsQ0FEYVgsU0FBU1ksZUFBZU4sS0FBS08sUUFBUUMsYUFvQnREQyxFQUFFLGVBQWVDLGNBQWMsQ0FDN0JDLEtBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCBzZXJ2aWNlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0dWR5X19uYXYtaXRlbScpO1xyXG4gICAgc2VydmljZU5hdi5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudE5hdiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRvZ2dsZU5hdkFjdGl2ZShjdXJyZW50TmF2KTtcclxuICAgICAgICAgICAgaGlkZU90aGVyKCk7XHJcbiAgICAgICAgICAgIGxldCBjb3Vyc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQuY291cnNlKTtcclxuICAgICAgICAgICAgc2hvd0N1cnJlbnQoY291cnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdkFjdGl2ZShlbGVtKXtcclxuICAgICAgICBsZXQgY3VycmVudENvdXJzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHVkeV9fbmF2LWl0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgY3VycmVudENvdXJzZS5jbGFzc0xpc3QudG9nZ2xlKCdzdHVkeV9fbmF2LWl0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdzdHVkeV9fbmF2LWl0ZW1fYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaWRlT3RoZXIoKXtcclxuICAgICAgICBsZXQgY291cnNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0dWR5X19jb3Vyc2VfYWN0aXZlJyk7XHJcbiAgICAgICAgY291cnNlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0dWR5X19jb3Vyc2VfYWN0aXZlJylcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dDdXJyZW50KGVsZW0pe1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnc3R1ZHlfX2NvdXJzZV9hY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKCcjZXhwZXJ0cGx1cycpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgIHR5cGU6ICdpbWFnZSdcclxuICAgICAgICAvLyBvdGhlciBvcHRpb25zXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxufSJdLCJmaWxlIjoic2VydmljZXMtbWluLmpzIn0=
