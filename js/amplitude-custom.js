// تهيئة مكتبة Amplitude وإضافة قائمة من الأغاني كبداية
Amplitude.init({
  songs: [
    {
      name: "حلقة يا حب البرغل ",
      artist: "عمار أبو حسين",
      album: "بودكاست اللويح",
      url: "./img/audio/01.mp3",
      cover_art_url: "./img/podcast/1.webp",
      id: "d1",
    },
    {
      name: "حلقة المطب الأول ",
      artist: "عمار أبو حسين",
      album: "بودكاست مطبات ",
      url: "./img/audio/02.mp3",
      cover_art_url: "./img/podcast/2.webp",
      id: "d2",
    },
    {
      name: "حلقة دوزان مرة تانية",
      artist: "عمار أبو حسين",
      album: "بودكاست اللويح",
      url: "./img/audio/03.mp3",
      cover_art_url: "./img/podcast/3.webp",
      id: "d3",
    },
  ],
});

// عند الضغط على زر إظهار قائمة التشغيل، يقوم بإظهار/إخفاء عنصر قائمة التشغيل
$(".show-playlist").on("click", function () {
  $("#playlist-container").toggle();
});

// عند الضغط على زر إغلاق قائمة التشغيل، يقوم بإخفاء عنصر القائمة تمامًا
$(".close-playlist").on("click", function () {
  $("#playlist-container").hide();
});

// مصفوفة تحتوي على أغاني/حلقات جديدة يمكن إضافتها لقائمة التشغيل
var songsToAdd = [
  {
    name: "العقلية في حياتنا الحلقة: 1",
    artist: "ليندا كلارك",
    album: "قصة حياة",
    url: "img/audio/01.mp3",
    cover_art_url: "img/show/01.jpg",
    id: "n1",
  },
  {
    name: "الخارج والبقاء على قيد الحياة الحلقة: 2",
    artist: "جون هنري",
    album: "السفر",
    url: "img/audio/01.mp3",
    cover_art_url: "img/show/02.jpg",
    id: "n2",
  },
  {
    name: "تأسيس نادي للبودكاست الحلقة: 3",
    artist: "دانيال لورادو",
    album: "التكنولوجيا",
    url: "img/audio/01.mp3",
    cover_art_url: "img/show/03.jpg",
    id: "n3",
  },
  {
    name: "تحسين الأعمال الحلقة: 4",
    artist: "إدوارد مونسو",
    album: "الأعمال",
    url: "img/audio/01.mp3",
    cover_art_url: "img/show/04.jpg",
    id: "n4",
  },
  {
    name: "تقييم مجالاتك الحلقة: 5",
    artist: "هولي لويل",
    album: "النمو الشخصي",
    url: "img/audio/01.mp3",
    cover_art_url: "img/show/05.jpg",
    id: "n5",
  },
  {
    name: "جعل البودكاست فريدًا الحلقة: 6",
    artist: "ديبورا مايرز",
    album: "الكوميديا",
    url: "img/audio/01.mp3",
    cover_art_url: "img/show/06.jpg",
    id: "n6",
  },
  {
    name: "أفكار بودكاست الموسيقى الحلقة: 7",
    artist: "تيري بيرك",
    album: "الموسيقى",
    url: "img/audio/01.mp3",
    cover_art_url: "img/show/07.jpg",
    id: "n7",
  },
  {
    name: "تعليم المهارات الشخصية الحلقة: 8",
    artist: "أليكس فييلو",
    album: "التعليم",
    url: "img/audio/01.mp3",
    cover_art_url: "img/show/08.jpg",
    id: "n8",
  },
  {
    name: "العقلية في حياتنا الحلقة: 1",
    artist: "ليندا كلارك",
    album: "قصة حياة",
    url: "img/audio/01.mp3",
    cover_art_url: "img/episode/01.jpg",
    id: "n9",
  },
  {
    name: "العقلية في حياتنا الحلقة: 2",
    artist: "ليندا كلارك",
    album: "قصة حياة",
    url: "img/audio/01.mp3",
    cover_art_url: "img/episode/02.jpg",
    id: "n10",
  },
  {
    name: "العقلية في حياتنا الحلقة: 3",
    artist: "ليندا كلارك",
    album: "قصة حياة",
    url: "img/audio/01.mp3",
    cover_art_url: "img/episode/03.jpg",
    id: "n11",
  },
  {
    name: "العقلية في حياتنا الحلقة: 4",
    artist: "ليندا كلارك",
    album: "قصة حياة",
    url: "img/audio/01.mp3",
    cover_art_url: "img/episode/04.jpg",
    id: "n12",
  },
  {
    name: "العقلية في حياتنا الحلقة: 5",
    artist: "ليندا كلارك",
    album: "قصة حياة",
    url: "img/audio/01.mp3",
    cover_art_url: "img/episode/05.jpg",
    id: "n13",
  },
  {
    name: "العقلية في حياتنا الحلقة: 6",
    artist: "ليندا كلارك",
    album: "قصة حياة",
    url: "img/audio/01.mp3",
    cover_art_url: "img/episode/06.jpg",
    id: "n14",
  },
  {
    name: "العقلية في حياتنا الحلقة: 7",
    artist: "ليندا كلارك",
    album: "قصة حياة",
    url: "img/audio/01.mp3",
    cover_art_url: "img/episode/07.jpg",
    id: "n15",
  },
  {
    name: "العقلية في حياتنا الحلقة: 8",
    artist: "ليندا كلارك",
    album: "قصة حياة",
    url: "img/audio/01.mp3",
    cover_art_url: "img/episode/08.jpg",
    id: "n16",
  },
];

// عند الضغط على زر التشغيل في البطاقات (الـ"player-btn")
// يتحقق إذا كان هناك أغانٍ من قبل في قائمة التشغيل
// ثم يبحث إذا كانت الأغنية موجودة مسبقًا أم لا
// إذا لم تكن موجودة يضيفها إلى قائمة التشغيل ويشغلها
// أما إذا كانت موجودة مسبقًا فيظهر رسالة في الكونسول
$(".player-btn").on("click", function (e) {
  // إذا كان عدد الأغاني في مكتبة Amplitude يساوي صفر، يقوم بإفراغ محتوى قائمة التشغيل
  if (Amplitude.getSongs().length === 0) {
    $(".playlist-content").html("");
  }

  // جلب قيمة الفهرس الخاص بالأغنية المطلوبة من العنصر (data-song-add)
  var songToAddIndex = $(this).attr("data-song-add");

  // البحث عن فهرس الأغنية في قائمة الأغاني الحالية في Amplitude، بناء على الـ id
  var index = Amplitude.getSongs().findIndex(
    (item) => item.id === songsToAdd[songToAddIndex].id
  );

  // إذا لم يتم إيجاد الأغنية (الفهرس = -1) نقوم بإضافتها لقائمة التشغيل
  if (index === -1) {
    // إضافة الأغنية إلى Amplitude وإرجاع فهرسها الجديد
    var newIndex = Amplitude.addSong(songsToAdd[songToAddIndex]);
    // إلحاق تفاصيل الأغنية بواجهة العرض
    appendToSongDisplay(songsToAdd[songToAddIndex], newIndex);
    // تشغيل الأغنية فورًا بعد إضافتها
    Amplitude.playSongAtIndex(newIndex);
    // ربط العناصر الجديدة مع مكتبة Amplitude
    Amplitude.bindNewElements();
    // تفعيل المظهر الخاص بزر التشغيل للأغنية المعنية
    setPlayButtonView(songToAddIndex);
  } else {
    // إذا كانت الأغنية موجودة مسبقًا في القائمة
    console.log("Already added in playlist!");
  }
});

// وظيفة للتحكم في مظهر زر التشغيل/الإيقاف بناءً على الفهرس
function setPlayButtonView(index) {
  // إزالة الكلاس "active" عن كل العناصر أولاً
  $("[data-song-add]").removeClass("active");
  // إضافة الكلاس "active" للزر الذي تم الضغط عليه حاليًا
  $("[data-song-add=" + index + "]").addClass("active");
}

// وظيفة لإلحاق الأغنية الجديدة في واجهة عرض القائمة
function appendToSongDisplay(song, index) {
  // إضافة عنصر HTML جديد يحتوي على تفاصيل الأغنية في قائمة التشغيل
  $(".playlist-content").append(`
      <div class="playlist-item">
        <div class="playlist-song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="${index}">
          <img src="${song.cover_art_url}"/>
          <div class="playlist-song-meta">
            <span class="playlist-song-name">${song.name}</span>
            <span class="playlist-artist-album">${song.artist}</span>
          </div>
        </div>
        <button type="button" class="playlist-remove" data-remove-id="${song.id}"><i class="far fa-xmark"></i></button>
      </div>
    `);
}

// عند الضغط على زر إزالة الأغنية من القائمة
// يقوم بإزالة العنصر من واجهة العرض ومن مكتبة Amplitude
$(".playlist-content").on("click", ".playlist-remove", function (e) {
  // منع حدث الضغط من التفعيل على العنصر الأب أو الأغاني نفسها
  e.stopPropagation();

  // الحصول على قيمة الـ id للأغنية المطلوب حذفها
  var id = $(this).attr("data-remove-id");
  // الحصول على العنصر الأب الذي يحتوي على معلومات الأغنية
  var $item = $(this).closest(".playlist-item");

  // إيجاد موقع الأغنية في قائمة Amplitude بناءً على الـ id
  var index = Amplitude.getSongs().findIndex((song) => song.id === id);

  // إذا تم إيجاد الفهرس بنجاح، احذف العنصر من الواجهة ومن مكتبة Amplitude
  if (index > -1) {
    // حذف العنصر من واجهة المستخدم
    $item.remove();
    // حذف الأغنية من قائمة Amplitude
    Amplitude.removeSong(index);

    // إذا أصبحت قائمة الأغاني فارغة بعد الحذف، أضف نص يخبر المستخدم بذلك
    if (Amplitude.getSongs().length === 0) {
      $(".playlist-content").html(`
        <div class="col-sm-8 col-10 mx-auto mt-5 text-center">
          <i class="far fa-music mb-3"></i>
          <p>No songs, album or playlist are added on lineup.</p>
        </div>`);
    }
  }
});

// المتغيرات الخاصة بعناصر التحكم في مستوى الصوت
const audioPlayerContainer = document.getElementById("player-volume");
const volumeSlider = document.getElementById("volume-slider");
const volumeBtn = document.getElementById("amplitude-mute");

// دالة لتحديث مظهر الشريط المرئي لمستوى الصوت (progress bar)
const showRangeProgress = (rangeInput) => {
  audioPlayerContainer.style.setProperty(
    "--volume-before-width",
    (rangeInput.value / rangeInput.max) * 100 + "%"
  );
};

// إظهار الشريط المرئي لمستوى الصوت عند التحميل
showRangeProgress(volumeSlider);

// عند تغيير قيمة مستوى الصوت، يتم تحديث الشريط المرئي
volumeSlider.addEventListener("input", (e) => {
  showRangeProgress(e.target);
});

// عند كتم/إعادة تشغيل الصوت، يتم تحديث الشريط أيضًا (ممكن تفاديًا لتغيرات جذرية)
volumeBtn.addEventListener("click", () => {
  showRangeProgress(volumeSlider);
});

// عند الضغط على زر إخفاء مشغل الصوت، قم بقلب كلاس "show" وإخفاء قائمة التشغيل
$(".audio-player-hide").on("click", function () {
  $(".audio-player").toggleClass("show");
  $("#playlist-container").hide();
});
