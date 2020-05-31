export default class Validation {
   constructor() {
      this.inputName = document.querySelector('[data-name]');
      this.inputEmail = document.querySelector('[data-email]');
      this.inputTel = document.querySelector('[data-tel]');
      this.btn = document.querySelector('[data-btn]');
   }
   validForm(input, type) {
      if (type == 'email') {
            let re = /[_a-z\d\-\.]+@[_a-z\d\-]+(\.[_a-z\d\-]+)/gi;
            if(input.value.search(re) === -1) {
            this.btn.disabled = true;

               input.style.border = '1px solid red';
            }else {
               input.style.border = '0';
            this.btn.disabled = false;

            }
      } else if (type == 'tel'){
         if (input.value.search(/[^a-zа-я]/ig)) {
            setTimeout(() => {input.value = ''}, 100);
            
			}
         if (input.value == '') {
            this.btn.disabled = true;
            input.style.border = '1px solid red';
         } else {
            input.style.border = '0';
            this.btn.disabled = false;

         }
      } else if (type == 'text') {
         if (input.value == '') {
            this.btn.disabled = true;
            input.style.border = '1px solid red';
         } else {
            this.btn.disabled = false;
            input.style.border = '0';
         }
      }
   }
   init () {
      this.btn.addEventListener('mouseover', () => {
         this.validForm(this.inputName, 'text');
         this.validForm(this.inputEmail, 'email');
         this.validForm(this.inputTel, 'tel');
      });
      this.inputName.addEventListener('input', () => {
         this.validForm(this.inputName, 'text');
      });
      this.inputEmail.addEventListener('input', () => {
         this.validForm(this.inputEmail, 'email');
      });
      this.inputTel.addEventListener('input', () => {
         this.validForm(this.inputTel, 'tel');
      });
      
   }
}