(()=>{"use strict";new class{constructor(t,e,s){this.widget=t,this.validate=e,this.system=s}registerEvents(){this.widget.button.addEventListener("click",this.clickValidate.bind(this)),this.widget.input.addEventListener("input",this.validateOnlyNumbers.bind(this)),this.widget.input.addEventListener("input",this.resetIconsCard.bind(this))}clickValidate(t){t.preventDefault();const e=this.widget.getValue();let s=this.system.getSystem(e);s&&this.widget.renderPaySystem(s)}validateOnlyNumbers(){let t=this.widget.getValue();!1===this.widget.onlyNumbers(t)&&(t=this.widget.clear(t),this.widget.input.value=t)}resetIconsCard(){0===this.widget.getValue().length&&this.widget.clearCards()}}(new class{constructor(t){"string"==typeof t&&(this.widget=document.querySelector(t)),this.iconsCards=this.widget.querySelectorAll(".widget__card-img-item"),this.input=this.widget.querySelector(".widget__form-input"),this.button=this.widget.querySelector(".widget__form-button"),this.lastCardIcon=null,this.lastTypeCard=null}clear(t){return(t=t.split("")).pop(),t.join("")}getValue(){return this.input.value}onlyNumbers(t){if(t=(t=t.split(""))[t.length-1],isNaN(parseInt(t)))return!1}renderPaySystem(t){this.lastTypeCard=t;for(let e=0;e<this.iconsCards.length;e+=1)this.iconsCards[e].matches(`.widget__card-img-${t}`)&&(this.iconsCards[e].classList.add(`${t}_active`),this.lastCardIcon=this.iconsCards[e])}clearCards(){this.lastCardIcon&&this.lastCardIcon.classList.remove(`${this.lastTypeCard}_active`)}}(".widget"),new class{clean(t){}validateNum(t){}},new class{constructor(){this.systems=["mir","american-express","visa","master-card"]}getSystem(t){let e=(t=t.split("")).shift();if(+e>=2&&+e<=5)return this.systems[+e-2]}}).registerEvents()})();
//# sourceMappingURL=index.js.map