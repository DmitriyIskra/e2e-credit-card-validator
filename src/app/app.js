import WidgetControl from "./WidgetControl";
import Validate from "./validate";
import System from "./whose-system";
import AppControl from "./AppControl";

const appControl = new AppControl(new WidgetControl('.widget'), new Validate(), new System());

appControl.registerEvents();




// VISA
// 4716429952877957
// 4539967046718534
// 4539447607773004912

// MasterCard
// 5332746695675807
// 5178453007440551
// 2221002977000863

// American Express (AMEX)
// 371685320743577
// 343271340635583
// 373662485182865