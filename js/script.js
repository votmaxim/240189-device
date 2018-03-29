var feedbackLink = document.querySelector(".contacts__link-feedback");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal__close");
var feedbackForm = feedbackPopup.querySelector(".modal-feedback__form");
var feedbackFullName = feedbackPopup.querySelector("[name=fullname]");
var feedbackMail = feedbackPopup.querySelector("[name=email]");
var feedbackMessage = feedbackPopup.querySelector("[name=feedback-text]");

var isStorageSupport = true;
var storage = "";

try {

  fullnameStorage = localStorage.getItem("fullname");
  emailStorage = localStorage.getItem("email");

} catch (err) {

  isStorageSupport = false;

}

feedbackLink.addEventListener("click", function (evt) {

  evt.preventDefault();

  feedbackPopup.classList.add("modal-show");

  if (fullnameStorage && emailStorage) {

    feedbackFullName.value = fullnameStorage;
    feedbackMail.value = emailStorage;

    feedbackMessage.focus();

  } else {

    feedbackFullName.focus();

  }

});

feedbackClose.addEventListener("click", function (evt) {

  evt.preventDefault();

  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");

});

feedbackForm.addEventListener("submit", function (evt) {

  evt.preventDefault();

  if (!feedbackFullName.value || !feedbackMail.value || !feedbackMessage.value) {

    evt.preventDefault();

    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");

  } else {

    if (isStorageSupport) {
      localStorage.setItem("fullname", feedbackFullName.value);
      localStorage.setItem("email", feedbackMail.value);
    }

    feedbackForm.submit();

  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {

    if (feedbackPopup.classList.contains("modal-show")) {

      evt.preventDefault();

      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }

  }
});

feedbackMail.addEventListener("keyup", function (evt) {
  this.setAttribute("value", this.value);
});

var mapLink = document.querySelector(".map-contacts__link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal__close");

mapLink.addEventListener("click", function (evt) {

  evt.preventDefault();

  mapPopup.classList.add("modal-show");

});

mapClose.addEventListener("click", function (evt) {

  evt.preventDefault();

  mapPopup.classList.remove("modal-show");

});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {

    if (mapPopup.classList.contains("modal-show")) {

      evt.preventDefault();

      mapPopup.classList.remove("modal-show");

    }

  }
});
