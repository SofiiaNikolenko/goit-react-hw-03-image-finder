import * as basicLightbox from 'basiclightbox';

export const Modal = () => {
  const instance = basicLightbox.create(`
        <div class="overlay">
            <div class="modal">
                <img src="" alt="" />
            </div>
        </div>
    `);

  instance.show();

  return instance;
};
