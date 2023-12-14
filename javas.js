document.addEventListener("DOMContentLoaded", function () {
  var currentDate = new Date();
  var siteLaunchDate = new Date("2023-12-01"); // استبدل بتاريخ الإطلاق الفعلي لموقع الويب الخاص بك
  var daysSinceLaunch = Math.floor((currentDate - siteLaunchDate) / (1000 * 60 * 60 * 24));

  // عرض النتيجة في ديف النتيجة
  document.getElementById("result-container").innerHTML = "عمر الموقع: " + daysSinceLaunch + " يوم";
});

// انتظار حدث تحميل المستند (DOM) قبل تنفيذ الكود
document.addEventListener('DOMContentLoaded', function () {
  // تعريف عدد العناصر التي يتم عرضها في كل صفحة
  var itemsPerView = 6;

  // الحصول على عنصر العناصر في المعرض
  var galleryItems = document.querySelector('.gallery-items');
  // الحصول على زر الصفحة السابقة
  var prevButton = document.querySelector('.prev');
  // الحصول على زر الصفحة التالية
  var nextButton = document.querySelector('.next');

  // حساب إجمالي عدد العناصر في المعرض
  var totalItems = galleryItems.children.length;
  // حساب إجمالي عدد الصفحات المطلوبة
  var totalPages = Math.ceil(totalItems / itemsPerView);
  // تعيين الصفحة الحالية إلى الصفحة الأولى
  var currentPage = 1;

  // تعطيل زر الصفحة السابقة إذا كانت الصفحة الحالية هي الأولى
  prevButton.disabled = true;

  // إضافة استماع لحدث النقر على زر الصفحة التالية
  nextButton.addEventListener('click', function () {
    if (currentPage < totalPages) {
      currentPage++;
      updateGallery();
    }
  });

  // إضافة استماع لحدث النقر على زر الصفحة السابقة
  prevButton.addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--;
      updateGallery();
    }
  });

  // دالة لتحديث عرض المعرض بناءً على الصفحة الحالية
  function updateGallery() {
    var startIndex = (currentPage - 1) * itemsPerView;
    var endIndex = startIndex + itemsPerView;

    // تعيين تعطيل زر الصفحة السابقة إذا كانت الصفحة الحالية هي الأولى
    prevButton.disabled = currentPage === 1;
    // تعيين تعطيل زر الصفحة التالية إذا كانت الصفحة الحالية هي الأخيرة
    nextButton.disabled = currentPage === totalPages;

    // إعداد عرض العناصر في المعرض بناءً على الصفحة الحالية
    for (var i = 0; i < totalItems; i++) {
      galleryItems.children[i].style.display = i >= startIndex && i < endIndex ? 'block' : 'none';
    }
  }

  // تحديث المعرض عند بدء التنفيذ
  updateGallery();
});

// دالة للتنقل في المعرض باستخدام الأسهم
function scrollGallery(direction) {
  currentPage += direction;
  updateGallery();
}

