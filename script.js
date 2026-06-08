const profileData = {
  quick: {
    kicker: "Recruiter Mode",
    title: "Xem nhanh hồ sơ",
    body: `
      <div class="quick-panel">
        <img src="assets/images/id-photo.jpg" alt="Ảnh thẻ Huỳnh Tấn Đạt" data-zoom>
        <div>
          <p class="quick-lead">Huỳnh Tấn Đạt - sinh viên năm 4 Kỹ thuật Xây dựng, Đại học Nha Trang.</p>
          <div class="tag-list">
            <span>Kết cấu công trình</span>
            <span>BIM/Revit</span>
            <span>ETABS/SAFE</span>
            <span>Excel VBA</span>
            <span>Tool tự động hóa</span>
          </div>
        </div>
      </div>
      <div class="metric-strip">
        <div><strong>Năm 4</strong><span>Sinh viên Khoa Xây dựng</span></div>
        <div><strong>Top 10</strong><span>NTU Bridge Design Competition 2025</span></div>
        <div><strong>Grand Finalist</strong><span>NTU Bridge Design Competition 2026</span></div>
      </div>
      <div class="info-card">
        <h3>Điểm nổi bật</h3>
        <ul>
          <li>Định hướng kết cấu, BIM và tự động hóa trong xây dựng.</li>
          <li>Có sản phẩm cá nhân: tool tính gió, tool tính thép, Revit tool và Excel VBA quản lý chất lượng.</li>
          <li>Quan tâm ứng dụng lập trình và AI/Codex vào quy trình kỹ thuật.</li>
        </ul>
      </div>
      <div class="quick-actions">
        <a href="mailto:datkun2508@gmail.com">Gửi email</a>
        <a href="https://www.facebook.com/htdat2508" target="_blank" rel="noopener">Facebook</a>
        <a href="https://www.tiktok.com/@htdat_258" target="_blank" rel="noopener">TikTok</a>
      </div>
    `
  },
  qr: {
    kicker: "Share",
    title: "Mã QR profile",
    body: `
      <div class="qr-card">
        <img src="assets/images/profile-qr.png?v=tandat258" alt="Mã QR mở profile Huỳnh Tấn Đạt" data-zoom>
        <p>Mã này mở profile public tại https://tandat258.github.io/kysudat/. Bạn có thể in hoặc gửi mã này cho người khác quét trực tiếp.</p>
        <a href="assets/images/profile-qr.png" download="huynh-tan-dat-profile-qr.png">Tải mã QR</a>
      </div>
    `
  },
  personal: {
    kicker: "Giới thiệu",
    title: "Thông tin cá nhân",
    body: `
      <div class="personal-profile">
        <button class="id-photo-card" type="button" aria-label="Phóng to ảnh thẻ">
          <img src="assets/images/id-photo.jpg" alt="Ảnh thẻ Huỳnh Tấn Đạt" data-zoom>
        </button>
        <div class="fact-grid">
          <div class="fact"><span>Họ tên</span><strong>Huỳnh Tấn Đạt</strong></div>
          <div class="fact"><span>Ngành</span><strong>Kỹ thuật Xây dựng</strong></div>
          <div class="fact"><span>Trường</span><strong>Đại học Nha Trang</strong></div>
          <div class="fact"><span>Khu vực</span><strong>Nha Trang / Khánh Hòa</strong></div>
        </div>
      </div>
      <p>Sinh viên kỹ thuật xây dựng định hướng kết cấu, BIM và tự động hóa trong xây dựng.</p>
    `
  },
  education: {
    kicker: "Học vấn",
    title: "Trình độ học vấn",
    body: `
      <p>Sinh viên năm 4, Khoa Xây dựng, Trường Đại học Nha Trang. Chuyên ngành Kỹ thuật Xây dựng.</p>
      <div class="info-card">
        <h3>Định hướng học thuật</h3>
        <ul>
          <li>Thiết kế kết cấu công trình, nhà cao tầng, chung cư.</li>
          <li>Kết cấu bê tông cốt thép, kết cấu thép và nền móng.</li>
          <li>Tổ chức thi công, dự toán, tiến độ và quản lý xây dựng.</li>
          <li>BIM và các phần mềm phục vụ thiết kế, triển khai bản vẽ.</li>
        </ul>
      </div>
    `
  },
  skills: {
    kicker: "Năng lực",
    title: "Kỹ năng chuyên môn",
    body: `
      <div class="skill-board">
        <div class="skill-meter" style="--level: 88"><span>AutoCAD</span><strong>88%</strong></div>
        <div class="skill-meter" style="--level: 78"><span>Revit / BIM</span><strong>78%</strong></div>
        <div class="skill-meter" style="--level: 74"><span>ETABS / SAFE</span><strong>74%</strong></div>
        <div class="skill-meter" style="--level: 82"><span>Excel VBA</span><strong>82%</strong></div>
        <div class="skill-meter" style="--level: 66"><span>Revit API</span><strong>Đang học</strong></div>
      </div>
      <div class="card-grid">
        <div class="info-card">
          <h3>Phần mềm xây dựng</h3>
          <ul>
            <li>AutoCAD, Revit, ETABS, SAFE.</li>
            <li>MS Project, Excel nâng cao / VBA.</li>
            <li>Word báo cáo kỹ thuật.</li>
          </ul>
        </div>
        <div class="info-card">
          <h3>Kỹ thuật xây dựng</h3>
          <ul>
            <li>Đọc bản vẽ kiến trúc, kết cấu.</li>
            <li>Bóc tách khối lượng, tính tải trọng gió, bê tông cốt thép.</li>
            <li>Lập tiến độ, thuyết minh kỹ thuật, kiểm tra thép và ván khuôn.</li>
          </ul>
        </div>
        <div class="info-card">
          <h3>Công nghệ</h3>
          <ul>
            <li>Tạo tool hỗ trợ tính toán.</li>
            <li>Làm phần mềm WinForms.</li>
            <li>Tìm hiểu Revit API.</li>
            <li>Ứng dụng AI/Codex vào công việc kỹ thuật.</li>
          </ul>
        </div>
      </div>
    `
  },
  projects: {
    kicker: "Portfolio",
    title: "Dự án / sản phẩm cá nhân",
    body: `
      <div class="project-showcase" data-project-showcase>
        <div class="project-tabs" role="tablist" aria-label="Chọn dự án">
          <button class="active" type="button" data-project-tab data-video="assets/videos/wind-load.mp4" data-title="Phần mềm tính tải trọng gió" data-desc="Tool hỗ trợ tính toán tải trọng gió cho đồ án và công việc kỹ thuật. Video demo quy trình nhập dữ liệu, tính toán và kiểm tra kết quả.">Tính gió</button>
          <button type="button" data-project-tab data-video="assets/videos/rebar-tool.mp4" data-title="Tool tính thép dầm/cột" data-desc="Sản phẩm hỗ trợ tính thép dầm/cột, kết hợp các tool nhỏ phục vụ triển khai và kiểm tra cấu kiện trong Revit.">Tính thép</button>
          <button type="button" data-project-tab data-video="assets/videos/architecture.mp4" data-title="Đồ án thiết kế chung cư" data-desc="Video thuyết trình kiến trúc, phối cảnh, mặt bằng và hướng triển khai đồ án thiết kế kết cấu chung cư.">Kiến trúc</button>
        </div>
        <div class="project-player">
          <video src="assets/videos/wind-load.mp4" controls preload="metadata" playsinline></video>
          <div class="project-copy">
            <span>Dự án nổi bật</span>
            <h3>Phần mềm tính tải trọng gió</h3>
            <p>Tool hỗ trợ tính toán tải trọng gió cho đồ án và công việc kỹ thuật. Video demo quy trình nhập dữ liệu, tính toán và kiểm tra kết quả.</p>
          </div>
        </div>
      </div>
      <div class="timeline">
        <div class="timeline-item"><strong>Phần mềm tính tải trọng gió</strong><p>Tool hỗ trợ tính toán tải trọng gió cho đồ án và công việc kỹ thuật.</p></div>
        <div class="timeline-item"><strong>Tool tính thép dầm/cột</strong><p>Kết hợp tính toán thép và các tool nhỏ phục vụ triển khai trong Revit.</p></div>
        <div class="timeline-item"><strong>Excel VBA quản lý chất lượng</strong><p>File Excel dùng code VBA để hỗ trợ làm hồ sơ quản lý chất lượng.</p></div>
        <div class="timeline-item"><strong>Biểu đồ nhân công theo ngày</strong><p>Tool tạo biểu đồ nhân công giúp theo dõi nguồn lực thi công.</p></div>
        <div class="timeline-item"><strong>Đồ án chung cư</strong><p>Thiết kế kết cấu chung cư, bản render, mặt bằng và phối cảnh kiến trúc.</p></div>
      </div>
    `
  },
  achievements: {
    kicker: "Dấu ấn",
    title: "Thành tựu / hoạt động nổi bật",
    body: `
      <div class="media-grid">
        <figure class="media-card">
          <img src="assets/images/project-render-1.png" alt="Chứng nhận Top 10 Finalist NTU Bridge Design Competition 2025" data-zoom>
          <figcaption>Top 10 Finalist - NTU Bridge Design Competition 2025</figcaption>
        </figure>
        <figure class="media-card">
          <img src="assets/images/project-render-2.png" alt="Chứng nhận Grand Finalist NTU Bridge Design Competition 2026" data-zoom>
          <figcaption>Grand Finalist - NTU Bridge Design Competition 2026</figcaption>
        </figure>
      </div>
      <div class="info-card">
        <h3>Hoạt động nổi bật</h3>
        <ul>
          <li>Tham gia cuộc thi thiết kế cầu quốc tế tại Singapore giai đoạn 2025 - 2026 và vào top 10 chung cuộc.</li>
          <li>Thực tập tại doanh nghiệp xây dựng.</li>
          <li>Tham gia các dự án học thuật, đồ án và báo cáo chuyên ngành.</li>
          <li>Làm các sản phẩm cá nhân về tự động hóa xây dựng.</li>
        </ul>
      </div>
      <p>Thông qua các cuộc thi, đồ án và quá trình thực tập, Đạt rèn luyện tư duy kỹ thuật, làm việc nhóm, trình bày ý tưởng và tiếp cận thực tế thi công.</p>
    `
  },
  strengths: {
    kicker: "Tự đánh giá",
    title: "Ưu điểm và nhược điểm",
    body: `
      <div class="card-grid">
        <div class="info-card">
          <h3>Ưu điểm</h3>
          <ul>
            <li>Ham học hỏi, có tinh thần tự học.</li>
            <li>Chịu khó tìm hiểu công nghệ mới.</li>
            <li>Biết kết hợp xây dựng với phần mềm.</li>
            <li>Có khả năng làm báo cáo, thuyết minh và hệ thống hóa tài liệu.</li>
            <li>Không ngại thử nghiệm tool mới.</li>
          </ul>
        </div>
        <div class="info-card">
          <h3>Cần cải thiện</h3>
          <ul>
            <li>Kinh nghiệm thực tế đang trong quá trình tích lũy.</li>
            <li>Cần cải thiện khả năng ưu tiên công việc khi có nhiều ý tưởng.</li>
            <li>Kỹ năng lập trình đang tự học và cần hệ thống hóa thêm.</li>
            <li>Cần rèn giao tiếp chuyên nghiệp, phần mềm chuyên sâu và ngoại ngữ.</li>
          </ul>
        </div>
      </div>
    `
  },
  hobbies: {
    kicker: "Đời sống",
    title: "Sở thích",
    body: `
      <div class="info-card">
        <h3>Cá nhân</h3>
        <p>Xem phim, nghe nhạc, chơi game và đá bóng.</p>
      </div>
      <div class="tag-list">
        <span>Công nghệ xây dựng</span>
        <span>Thiết kế</span>
        <span>Mô hình BIM</span>
        <span>Tool kỹ thuật</span>
        <span>Cuộc thi kỹ thuật</span>
        <span>Render kiến trúc</span>
        <span>Tiếng Anh chuyên ngành</span>
      </div>
    `
  },
  direction: {
    kicker: "Tương lai",
    title: "Định hướng phát triển",
    body: `
      <p>Trong thời gian tới, Đạt định hướng phát triển theo mảng kết cấu công trình, BIM và tự động hóa trong xây dựng.</p>
      <p>Mục tiêu là vừa nắm chắc kiến thức kỹ thuật xây dựng, vừa biết ứng dụng phần mềm, lập trình và AI để tối ưu quá trình thiết kế, bóc tách khối lượng, lập tiến độ và triển khai bản vẽ.</p>
      <div class="timeline">
        <div class="timeline-item"><strong>Giai đoạn 1</strong><p>Củng cố nền tảng kết cấu, phần mềm xây dựng và kỹ năng đọc - triển khai bản vẽ.</p></div>
        <div class="timeline-item"><strong>Giai đoạn 2</strong><p>Xây dựng thêm các tool tính toán, Revit API, VBA và quy trình BIM phục vụ đồ án/thực tế.</p></div>
        <div class="timeline-item"><strong>Giai đoạn 3</strong><p>Kết hợp kỹ thuật, lập trình và AI để tối ưu quy trình thiết kế, quản lý và thi công.</p></div>
      </div>
    `
  },
  contact: {
    kicker: "Kết nối",
    title: "Liên hệ",
    body: `
      <div class="fact-grid">
        <a class="fact contact-link" href="mailto:datkun2508@gmail.com"><span>Email</span><strong>datkun2508@gmail.com</strong></a>
        <a class="fact contact-link" href="https://zalo.me/0344754029" target="_blank" rel="noopener"><span>Zalo</span><strong>0344754029</strong></a>
        <a class="fact contact-link" href="https://www.facebook.com/htdat2508" target="_blank" rel="noopener"><span>Facebook</span><strong>facebook.com/htdat2508</strong></a>
        <a class="fact contact-link" href="https://www.tiktok.com/@htdat_258" target="_blank" rel="noopener"><span>TikTok</span><strong>@htdat_258</strong></a>
      </div>
    `
  }
};

const stage = document.querySelector("#stage");
const chibiButton = document.querySelector("#chibiButton");
const modalBackdrop = document.querySelector("#modalBackdrop");
const modalClose = document.querySelector("#modalClose");
const modalKicker = document.querySelector("#modalKicker");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");
const openButtons = document.querySelectorAll("[data-open]");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxClose = document.querySelector("#lightboxClose");

let lastFocusedElement = null;

function toggleMenu(forceState) {
  const isOpen = typeof forceState === "boolean" ? forceState : !stage.classList.contains("menu-open");
  stage.classList.toggle("menu-open", isOpen);
  chibiButton.setAttribute("aria-expanded", String(isOpen));
}

function openModal(key) {
  const item = profileData[key];
  if (!item) return;

  lastFocusedElement = document.activeElement;
  modalKicker.textContent = item.kicker;
  modalTitle.textContent = item.title;
  modalBody.innerHTML = item.body;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modalBody.querySelectorAll("video").forEach((video) => video.pause());
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.hidden = false;
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
}

chibiButton.addEventListener("click", () => toggleMenu());

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleMenu(false);
    openModal(button.dataset.open);
  });
});

modalClose.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

modalBody.addEventListener("click", (event) => {
  const zoomImage = event.target.closest("[data-zoom]");
  if (zoomImage) {
    openLightbox(zoomImage);
    return;
  }

  const projectTab = event.target.closest("[data-project-tab]");
  if (projectTab) {
    const showcase = projectTab.closest("[data-project-showcase]");
    const video = showcase.querySelector("video");
    const title = showcase.querySelector(".project-copy h3");
    const description = showcase.querySelector(".project-copy p");

    showcase.querySelectorAll("[data-project-tab]").forEach((tab) => {
      tab.classList.toggle("active", tab === projectTab);
    });

    video.pause();
    video.src = projectTab.dataset.video;
    video.load();
    title.textContent = projectTab.dataset.title;
    description.textContent = projectTab.dataset.desc;
  }
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!lightbox.hidden) {
      closeLightbox();
      return;
    }
    if (!modalBackdrop.hidden) {
      closeModal();
      return;
    }
    toggleMenu(false);
  }
});
