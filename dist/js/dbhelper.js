class DBHelper{static get DATABASE_URL(){return"http://localhost:1337/restaurants"}static fetchRestaurants(t){const e=idb.open("restaurant-db",4,function(t){t.objectStoreNames.contains("restaurant-store")||t.createObjectStore("restaurant-store",{keyPath:"id"})});function r(){e.then(t=>t.transaction("restaurant-store").objectStore("restaurant-store").getAll()).then(e=>t(null,e))}fetch(DBHelper.DATABASE_URL).then(function(t){return t.json()}).then(t=>(e.then(e=>{const r=e.transaction("restaurant-store","readwrite"),a=r.objectStore("restaurant-store");for(const e of t)a.put(e);return r.complete}).then(()=>{console.log("restaurants added")}),t)).then(function(e){return t(null,e)}).catch(()=>r())}static fetchRestaurantById(t,e){DBHelper.fetchRestaurants((r,a)=>{if(r)e(r,null);else{const r=a.find(e=>e.id==t);r?e(null,r):e("Restaurant does not exist",null)}})}static fetchRestaurantByCuisine(t,e){DBHelper.fetchRestaurants((r,a)=>{if(r)e(r,null);else{const r=a.filter(e=>e.cuisine_type==t);e(null,r)}})}static fetchRestaurantByNeighborhood(t,e){DBHelper.fetchRestaurants((r,a)=>{if(r)e(r,null);else{const r=a.filter(e=>e.neighborhood==t);e(null,r)}})}static fetchRestaurantByCuisineAndNeighborhood(t,e,r){DBHelper.fetchRestaurants((a,n)=>{if(a)r(a,null);else{let a=n;"all"!=t&&(a=a.filter(e=>e.cuisine_type==t)),"all"!=e&&(a=a.filter(t=>t.neighborhood==e)),r(null,a)}})}static fetchNeighborhoods(t){DBHelper.fetchRestaurants((e,r)=>{if(e)t(e,null);else{const e=r.map((t,e)=>r[e].neighborhood),a=e.filter((t,r)=>e.indexOf(t)==r);t(null,a)}})}static fetchCuisines(t){DBHelper.fetchRestaurants((e,r)=>{if(e)t(e,null);else{const e=r.map((t,e)=>r[e].cuisine_type),a=e.filter((t,r)=>e.indexOf(t)==r);t(null,a)}})}static urlForRestaurant(t){return`./restaurant.html?id=${t.id}`}static imageUrlForRestaurant(t){return`/src/img/${t.id}-300_small.jpg`}static imageSrcsetForIndex(t){return`src/images/${t.id}-300_small.jpg 1x, src/images/${t.id}-600_medium_2x.jpg 2x`}static imageSrcsetForRestaurant(t){return`src/images/${t.id}-300_small.jpg 300w, src/images/${t.id}-600_medium_2x.jpg 600w, src/images/${t.id}-800_large_2x.jpg 800w`}static mapMarkerForRestaurant(t,e){const r=new L.marker([t.latlng.lat,t.latlng.lng],{title:t.name,alt:t.name,url:DBHelper.urlForRestaurant(t)});return r.addTo(newMap),r}}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiaGVscGVyLmpzIl0sIm5hbWVzIjpbIkRCSGVscGVyIiwiREFUQUJBU0VfVVJMIiwiW29iamVjdCBPYmplY3RdIiwib2JqZWN0U3RvcmVOYW1lcyIsImRiUHJvbWlzZSIsImlkYiIsIm9wZW4iLCJ1cGdyYWRlREIiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsImZldGNoIiwidGhlbiIsImRiIiwiZnVsZmlsbFJlc3VsdCIsImdldERiRGF0YSIsInJlc3RhdXJhbnRzIiwiY2FsbGJhY2siLCJyZXN0YXVyYW50IiwicHV0IiwiY29tcGxldGUiLCJ0eCIsInRyYW5zYWN0aW9uIiwibG9nIiwib2JqZWN0U3RvcmUiLCJyZXN0YXVyYW50U3RvcmUiLCJjYXRjaCIsImNvbnNvbGUiLCJpZCIsImZldGNoUmVzdGF1cmFudHMiLCJlcnJvciIsImZpbmQiLCJyIiwiY3Vpc2luZSIsInJlc3VsdHMiLCJmaWx0ZXIiLCJjdWlzaW5lX3R5cGUiLCJuZWlnaGJvcmhvb2QiLCJmZXRjaE5laWdoYm9yaG9vZHMiLCJtYXAiLCJ2IiwiaSIsIm5laWdoYm9yaG9vZHMiLCJpbmRleE9mIiwidW5pcXVlTmVpZ2hib3Job29kcyIsImN1aXNpbmVzIiwidW5pcXVlQ3Vpc2luZXMiLCJtYXJrZXIiLCJMIiwibGF0bG5nIiwibGF0IiwibG5nIiwidGl0bGUiLCJuYW1lIiwiYWx0IiwiaW1hZ2VTcmNzZXRGb3JSZXN0YXVyYW50IiwidXJsIiwidXJsRm9yUmVzdGF1cmFudCIsImFkZFRvIiwibmV3TWFwIl0sIm1hcHBpbmdzIjoiQUFZQSxNQUFNQSxTQUtKQywwQkFHRSxNQUFRLG9DQWdCRkMsd0JBQWVDLEdBRWQsTUFBQUMsRUFBQUMsSUFBQUMsS0FBQSxnQkFBQSxFQUFBLFNBQUFDLEdBRklBLEVBQVVKLGlCQUFpQkssU0FBUyxxQkFNL0NELEVBQUFFLGtCQUFxQixtQkFBQSxDQUFBQyxRQUFBLFNBZXJCQyxTQUFNWCxJQWRHSSxFQUFVUSxLQUFLQyxH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QixFQUFXK0IsT0FBT0MsSUFBS2hDLEVBQVcrQixPQUFPRSxLQUNwRSxDQUNFQyxNQUFPbEMsRUFBV21DLEtBWHhCQyxJQUFPQyxFQUFBQSxLQUNMQyxJQUFTeEQsU0FBQXlELGlCQUEyQnZDLEtBZXBDLE9BWkY2QixFQUFBVyxNQUFBQyxRQVlTWiIsImZpbGUiOiJkYmhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBpZiAoISgnaW5kZXhlZERCJyBpbiB3aW5kb3cpKSB7XHJcbiAgICBjb25zb2xlLmxvZygnVGhpcyBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IEluZGV4ZWREQicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogQ29tbW9uIGRhdGFiYXNlIGhlbHBlciBmdW5jdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBEQkhlbHBlciB7XHJcbi8qKlxyXG4gICAqIERhdGFiYXNlIFVSTC5cclxuICAgKiBDaGFuZ2UgdGhpcyB0byByZXN0YXVyYW50cy5qc29uIGZpbGUgbG9jYXRpb24gb24geW91ciBzZXJ2ZXIuXHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBEQVRBQkFTRV9VUkwoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gMTMzNyAvLyBDaGFuZ2UgdGhpcyB0byB5b3VyIHNlcnZlciBwb3J0XHJcblxyXG4gICAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vcmVzdGF1cmFudHNgO1xyXG5cclxuICAgIC8vIHJldHVybiBgaHR0cHM6Ly9kaW5kZXJhLmdpdGh1Yi5pby8ke3BvcnR9L2RhdGEvcmVzdGF1cmFudHMuanNvbmA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYWxsIHJlc3RhdXJhbnRzLlxyXG4gICAqL1xyXG5cclxuICBzdGF0aWMgZmV0Y2hSZXN0YXVyYW50cyhjYWxsYmFjaykge1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZGJQcm9taXNlID0gaWRiLm9wZW4oJ3Jlc3RhdXJhbnQtZGInLCA0LCBmdW5jdGlvbiAodXBncmFkZURCKSB7XHJcbiAgICAgIFxyXG4gICAgICAgICAgaWYgKCF1cGdyYWRlREIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygncmVzdGF1cmFudC1zdG9yZScpKSB7XHJcbiAgICAgICAgICAgIHVwZ3JhZGVEQi5jcmVhdGVPYmplY3RTdG9yZSgncmVzdGF1cmFudC1zdG9yZScsIHsga2V5UGF0aDogJ2lkJyB9KTtcclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGJEYXRhKCkge1xyXG4gICAgICByZXR1cm4gZGJQcm9taXNlLnRoZW4oZGI9PntcclxuICAgICAgICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbigncmVzdGF1cmFudC1zdG9yZScpXHJcbiAgICAgICAgICAgLm9iamVjdFN0b3JlKCdyZXN0YXVyYW50LXN0b3JlJyk7XHJcbiAgICAgICAgICAgcmV0dXJuIHR4LmdldEFsbCgpO1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGxSZXN1bHQoKXtcclxuICAgICAgZ2V0RGJEYXRhKCkudGhlbihyZXN0YXVyYW50cyA9PntcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgcmVzdGF1cmFudHMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmV0Y2goREJIZWxwZXIuREFUQUJBU0VfVVJMKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50cyA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gcmVzdGF1cmFudHM7XHJcbiAgICAgIH0pLnRoZW4ocmVzdGF1cmFudHMgPT4ge1xyXG4gICAgICAgIGRiUHJvbWlzZS50aGVuKGRiID0+IHtcclxuICAgICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oJ3Jlc3RhdXJhbnQtc3RvcmUnLCAncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICBjb25zdCByZXN0YXVyYW50U3RvcmUgPSB0eC5vYmplY3RTdG9yZSgncmVzdGF1cmFudC1zdG9yZScpO1xyXG4gICAgICAgICAgZm9yIChjb25zdCByZXN0YXVyYW50IG9mIHJlc3RhdXJhbnRzKSB7XHJcbiAgICAgICAgICAgIHJlc3RhdXJhbnRTdG9yZS5wdXQocmVzdGF1cmFudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHguY29tcGxldGU7XHJcbiAgICAgICAgfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3RhdXJhbnRzIGFkZGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3RhdXJhbnRzO1xyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN0YXVyYW50cykge1xyXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCByZXN0YXVyYW50cyk7XHJcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgcmV0dXJuIGZ1bGZpbGxSZXN1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhIHJlc3RhdXJhbnQgYnkgaXRzIElELlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaFJlc3RhdXJhbnRCeUlkKGlkLCBjYWxsYmFjaykge1xyXG4gICAgLy8gZmV0Y2ggYWxsIHJlc3RhdXJhbnRzIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50ID0gcmVzdGF1cmFudHMuZmluZChyID0+IHIuaWQgPT0gaWQpO1xyXG4gICAgICAgIGlmIChyZXN0YXVyYW50KSB7IC8vIEdvdCB0aGUgcmVzdGF1cmFudFxyXG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdGF1cmFudCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gUmVzdGF1cmFudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgZGF0YWJhc2VcclxuICAgICAgICAgIGNhbGxiYWNrKCdSZXN0YXVyYW50IGRvZXMgbm90IGV4aXN0JywgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHJlc3RhdXJhbnRzIGJ5IGEgY3Vpc2luZSB0eXBlIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaFJlc3RhdXJhbnRCeUN1aXNpbmUoY3Vpc2luZSwgY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50cyAgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmdcclxuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudHMoKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRmlsdGVyIHJlc3RhdXJhbnRzIHRvIGhhdmUgb25seSBnaXZlbiBjdWlzaW5lIHR5cGVcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gcmVzdGF1cmFudHMuZmlsdGVyKHIgPT4gci5jdWlzaW5lX3R5cGUgPT0gY3Vpc2luZSk7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmVzdGF1cmFudHMgYnkgYSBuZWlnaGJvcmhvb2Qgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudEJ5TmVpZ2hib3Job29kKG5laWdoYm9yaG9vZCwgY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGaWx0ZXIgcmVzdGF1cmFudHMgdG8gaGF2ZSBvbmx5IGdpdmVuIG5laWdoYm9yaG9vZFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXN0YXVyYW50cy5maWx0ZXIociA9PiByLm5laWdoYm9yaG9vZCA9PSBuZWlnaGJvcmhvb2QpO1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHJlc3RhdXJhbnRzIGJ5IGEgY3Vpc2luZSBhbmQgYSBuZWlnaGJvcmhvb2Qgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudEJ5Q3Vpc2luZUFuZE5laWdoYm9yaG9vZChjdWlzaW5lLCBuZWlnaGJvcmhvb2QsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyBGZXRjaCBhbGwgcmVzdGF1cmFudHNcclxuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudHMoKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSByZXN0YXVyYW50c1xyXG4gICAgICAgIGlmIChjdWlzaW5lICE9ICdhbGwnKSB7IC8vIGZpbHRlciBieSBjdWlzaW5lXHJcbiAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIociA9PiByLmN1aXNpbmVfdHlwZSA9PSBjdWlzaW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5laWdoYm9yaG9vZCAhPSAnYWxsJykgeyAvLyBmaWx0ZXIgYnkgbmVpZ2hib3Job29kXHJcbiAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIociA9PiByLm5laWdoYm9yaG9vZCA9PSBuZWlnaGJvcmhvb2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhbGwgbmVpZ2hib3Job29kcyB3aXRoIHByb3BlciBlcnJvciBoYW5kbGluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZmV0Y2hOZWlnaGJvcmhvb2RzKGNhbGxiYWNrKSB7XHJcbiAgICAvLyBGZXRjaCBhbGwgcmVzdGF1cmFudHNcclxuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudHMoKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gR2V0IGFsbCBuZWlnaGJvcmhvb2RzIGZyb20gYWxsIHJlc3RhdXJhbnRzXHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3Job29kcyA9IHJlc3RhdXJhbnRzLm1hcCgodiwgaSkgPT4gcmVzdGF1cmFudHNbaV0ubmVpZ2hib3Job29kKVxyXG4gICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gbmVpZ2hib3Job29kc1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZU5laWdoYm9yaG9vZHMgPSBuZWlnaGJvcmhvb2RzLmZpbHRlcigodiwgaSkgPT4gbmVpZ2hib3Job29kcy5pbmRleE9mKHYpID09IGkpXHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdW5pcXVlTmVpZ2hib3Job29kcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYWxsIGN1aXNpbmVzIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaEN1aXNpbmVzKGNhbGxiYWNrKSB7XHJcbiAgICAvLyBGZXRjaCBhbGwgcmVzdGF1cmFudHNcclxuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudHMoKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gR2V0IGFsbCBjdWlzaW5lcyBmcm9tIGFsbCByZXN0YXVyYW50c1xyXG4gICAgICAgIGNvbnN0IGN1aXNpbmVzID0gcmVzdGF1cmFudHMubWFwKCh2LCBpKSA9PiByZXN0YXVyYW50c1tpXS5jdWlzaW5lX3R5cGUpXHJcbiAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBjdWlzaW5lc1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUN1aXNpbmVzID0gY3Vpc2luZXMuZmlsdGVyKCh2LCBpKSA9PiBjdWlzaW5lcy5pbmRleE9mKHYpID09IGkpXHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdW5pcXVlQ3Vpc2luZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc3RhdXJhbnQgcGFnZSBVUkwuXHJcbiAgICovXHJcbiAgc3RhdGljIHVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudCkge1xyXG4gICAgLy8gcmV0dXJuIChgLi9yZXN0YXVyYW50Lmh0bWw/aWQ9JHtyZXN0YXVyYW50LmlkfWApO1xyXG4gICAgLy8gY29uc3QgdXJsID0gJ2h0dHBzOi8vZGluZGVyYS5naXRodWIuaW8vcmVzdGF1cmFudC1yZXZpZXctYXBwLyc7XHJcbiAgICByZXR1cm4gKGAuL3Jlc3RhdXJhbnQuaHRtbD9pZD0ke3Jlc3RhdXJhbnQuaWR9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXN0YXVyYW50IGltYWdlIFVSTC5cclxuICAgKi9cclxuICBzdGF0aWMgaW1hZ2VVcmxGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQpIHtcclxuICAgIHJldHVybiAoYC9zcmMvaW1nLyR7cmVzdGF1cmFudC5pZH0tMzAwX3NtYWxsLmpwZ2ApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiAgSW1hZ2UgU3Jjc2V0IGZvciBJbmRleCBwYWdlLlxyXG4gICovXHJcbiAgc3RhdGljIGltYWdlU3Jjc2V0Rm9ySW5kZXgocmVzdGF1cmFudCkge1xyXG4gICAgcmV0dXJuIChgc3JjL2ltYWdlcy8ke3Jlc3RhdXJhbnQuaWR9LTMwMF9zbWFsbC5qcGcgMXgsIHNyYy9pbWFnZXMvJHtyZXN0YXVyYW50LmlkfS02MDBfbWVkaXVtXzJ4LmpwZyAyeGApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiAgSW1hZ2UgU3Jjc2V0IGZvciBSZXN0YXVyYW50IHBhZ2UuXHJcbiAgKi9cclxuICBzdGF0aWMgaW1hZ2VTcmNzZXRGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQpIHtcclxuICAgIHJldHVybiAoYHNyYy9pbWFnZXMvJHtyZXN0YXVyYW50LmlkfS0zMDBfc21hbGwuanBnIDMwMHcsIHNyYy9pbWFnZXMvJHtyZXN0YXVyYW50LmlkfS02MDBfbWVkaXVtXzJ4LmpwZyA2MDB3LCBzcmMvaW1hZ2VzLyR7cmVzdGF1cmFudC5pZH0tODAwX2xhcmdlXzJ4LmpwZyA4MDB3YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXAgbWFya2VyIGZvciBhIHJlc3RhdXJhbnQuXHJcbiAgICovXHJcbiAgc3RhdGljIG1hcE1hcmtlckZvclJlc3RhdXJhbnQocmVzdGF1cmFudCwgbWFwKSB7XHJcbiAgICAvLyBodHRwczovL2xlYWZsZXRqcy5jb20vcmVmZXJlbmNlLTEuMy4wLmh0bWwjbWFya2VyICBcclxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBMLm1hcmtlcihbcmVzdGF1cmFudC5sYXRsbmcubGF0LCByZXN0YXVyYW50LmxhdGxuZy5sbmddLFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHJlc3RhdXJhbnQubmFtZSxcclxuICAgICAgICBhbHQ6IHJlc3RhdXJhbnQubmFtZSxcclxuICAgICAgICB1cmw6IERCSGVscGVyLnVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudClcclxuICAgICAgfSlcclxuICAgIG1hcmtlci5hZGRUbyhuZXdNYXApO1xyXG4gICAgcmV0dXJuIG1hcmtlcjtcclxuICB9XHJcbiAgLyogc3RhdGljIG1hcE1hcmtlckZvclJlc3RhdXJhbnQocmVzdGF1cmFudCwgbWFwKSB7XHJcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IHJlc3RhdXJhbnQubGF0bG5nLFxyXG4gICAgICB0aXRsZTogcmVzdGF1cmFudC5uYW1lLFxyXG4gICAgICB1cmw6IERCSGVscGVyLnVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudCksXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBtYXJrZXI7XHJcbiAgfSAqL1xyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ==