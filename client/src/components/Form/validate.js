const regexNumbers = /\d$/
const letters= /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/
export function validate(form) {
    const inputErrors = {}
    if (!form.name) inputErrors.name = "Name is required";
    else if (!letters.test(form.name)) inputErrors.name = 'Only characters is allowed '
    else if (form.name.length<4) inputErrors.name = 'Minimum 4 characters'
    else if (form.name.length>20) inputErrors.name = 'Maximum 20 characters'
    if (!form.min_height) inputErrors.min_height = "You must enter a minimum height";
    else if(!regexNumbers.test(form.min_height)) inputErrors.min_height = "Only allowed numbers"
    if (!form.max_height) inputErrors.max_height = "You must enter a maximum height";
    else if(!regexNumbers.test(form.max_height)) inputErrors.max_height = "Only allowed numbers"
    if (!form.min_weight) inputErrors.min_weight = "You must enter a minimum weight";
    else if(!regexNumbers.test(form.min_weight)) inputErrors.min_weight = "Only allowed numbers"
    if (!form.max_weight) inputErrors.max_weight = "You must enter a maximum weight";
    else if(!regexNumbers.test(form.max_weight)) inputErrors.max_weight = "Only allowed numbers"
    if (!form.min_life_span) inputErrors.min_life_span = "You must enter a life span";
    else if (letters.test(form.min_life_span)) inputErrors.min_life_span ="Only allowed numbers"
    else if (form.min_life_span.length>=3) inputErrors.min_life_span ="Maximum 2 digits"
    if (!form.max_life_span) inputErrors.max_life_span = "You must enter a life span";
    else if (letters.test(form.max_life_span)) inputErrors.max_life_span ="Only allowed numbers"
    else if (form.max_life_span.length>=3) inputErrors.max_life_span ="Maximum 2 digits"
    if (form.min_life_span.length && (form.min_life_span >= form.max_life_span || form.max_life_span <= form.min_life_span)) {
        inputErrors.min_life_span ="Must be lower than maximum life span";
        inputErrors.max_life_span ="Must be higher than minimum life span"
    }
    if (form.min_weight.length && (form.min_weight >= form.max_weight || form.max_weight <= form.min_weight)) {
        inputErrors.min_weight ="Must be lower than maximum weight ";
        inputErrors.max_weight ="Must be higher than maximum weight ";
    }
    if (form.min_height.length && (form.min_height >= form.max_height || form.max_height <= form.min_height)) {
        inputErrors.min_height = "Must be lower than maximum height "
        inputErrors.max_height ="Must be higher than maximum height ";
    }
    if (!form.temperaments.length) inputErrors.temperaments = "You must select a temperament";
    return inputErrors;
    }