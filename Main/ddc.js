//DDC Written By Lashen Dharmadasa For Hikium EC Project

var moveables = []; //List of moveable elements

attachedinput = null; //Initialize the object

//Function to create canvas
function create_canvas() {
    var canvas = document.createElement('div'); //Canvas is a new div

    canvas.id = 'canvas'; //Set canvas ID to canvas
}

//Function to add the moveable=true attribute to objects

function create_moveable(element) {
    if (Array.isArray(element)) {
        //If the element variable is a list of elements to convert to moveables
        for (const e of element) {
            if (typeof (e) == 'object') {
                //If element is an object add moveable=true
                element.setAttribute('moveable', true);
                moveables.push(element); //Push to moveable list
            } else {
                if (e.includes('#')) {
                    //If element is an id add moveable=true to object that contains id
                    if (document.getElementById(e.replace('#', ''))) {
                        document.getElementById(e.replace('#', '')).setAttribute('moveable', true);
                        moveables.push(document.getElementById(e.replace('#', ''))); //Push to moveable list
                    }
                }
                if (e.includes('.')) {
                    //If element is a class iterate through items with class
                    for (const class_e of document.getElementsByClassName(e.replace('.', ''))) {
                        //Add moveable=true to each item with class
                        class_e.setAttribute('moveable', true);
                        moveables.push(class_e); //Push to moveable list
                    }
                }
            }
        }
    }
    //If element is a single variable IE: not an array 
    else {
        //If element is an object add moveable=true
        if (typeof (element) == 'object') {
            element.setAttribute('moveable', true);
            moveables.push(element); //Push to moveable list
        } else {
            if (element.includes('#')) {
                //If element is an id add moveable=true to object that contains id
                if (document.getElementById(element.replace('#', ''))) {
                    document.getElementById(element.replace('#', '')).setAttribute('moveable', true);
                    moveables.push(document.getElementById(element.replace('#', ''))); //Push to moveable list
                }
            }
            if (element.includes('.')) {
                for (const class_e of document.getElementsByClassName(element.replace('.', ''))) {
                    //Add moveable=true to each item with class
                    class_e.setAttribute('moveable', true);
                    moveables.push(class_e); //Push to moveable list
                }
            }
        }
    }

    //Remove duplicates from the moveables list
    moveables = [...new Set(moveables)];

    //Return list of current moveable elements post-update
    return moveables;
}

//Function to remove the moveable=true attribute from objects

function remove_moveable(element) {
    if (Array.isArray(element)) {
        //If the element variable is a list of elements to remove them from list
        for (const e of element) {
            if (typeof (e) == 'object') {
                //If element is an object set moveable=false
                element.setAttribute('moveable', false);
                moveables.pop(element); //Remove from moveable list
            } else {
                if (e.includes('#')) {
                    //If element is an id set moveable=false to object that contains id
                    if (document.getElementById(e.replace('#', ''))) {
                        document.getElementById(e.replace('#', '')).setAttribute('moveable', false);
                        moveables.pop(document.getElementById(e.replace('#', ''))); //Remove from moveable list
                    }
                }
                if (e.includes('.')) {
                    //If element is a class iterate through items with class
                    for (const class_e of document.getElementsByClassName(e.replace('.', ''))) {
                        //Set moveable=false to each item with class
                        class_e.setAttribute('moveable', false);
                        moveables.pop(class_e); //Remove from moveable list
                    }
                }
            }
        }
    }
    //If element is a single variable IE: not an array 
    else {
        //If element is an object add moveable=false
        if (typeof (element) == 'object') {
            element.setAttribute('moveable', false);
            moveables.pop(element); //Remove from moveable list
        } else {
            if (element.includes('#')) {
                //If element is an id add moveable=false to object that contains id
                if (document.getElementById(element.replace('#', ''))) {
                    document.getElementById(element.replace('#', '')).setAttribute('moveable', false);
                    moveables.pop(document.getElementById(element.replace('#', ''))); //Pop from moveable list
                }
            }
            if (element.includes('.')) {
                for (const class_e of document.getElementsByClassName(element.replace('.', ''))) {
                    //Add moveable=false to each item with class
                    class_e.setAttribute('moveable', false);
                    moveables.pop(class_e); //Pop from moveable list
                }
            }
        }
    }

    //Remove duplicates from the moveables list
    moveables = [...new Set(moveables)];

    //Return list of current moveable elements post-update
    return moveables;
}

//Function to destroy moveable elements
function destroy_moveable(element) {
    //Remove moveable from the list
    remove_moveable(element);

    if (Array.isArray(element)) {
        //If the element variable is a list of elements destroy each one
        for (const e of element) {
            if (typeof (e) == 'object') {
                //If element is an object destroy it
                element.remove();
            } else {
                if (e.includes('#')) {
                    if (document.getElementById(e.replace('#', ''))) {
                        //Destroy element by id
                        document.getElementById(e.replace('#', '')).remove();
                    }
                }
                if (e.includes('.')) {
                    //If element is a class iterate through items with class
                    for (const class_e of document.getElementsByClassName(e.replace('.', ''))) {
                        //Destroy each element
                        class_e.remove();
                    }
                }
            }
        }
    }
    //If element is a single variable IE: not an array 
    else {
        if (typeof (element) == 'object') {
            //If element is an object destroy it
            element.remove();
        } else {
            if (element.includes('#')) {
                if (document.getElementById(element.replace('#', ''))) {
                    //Destroy element by id
                    document.getElementById(element.replace('#', '')).remove();
                }
            }
            if (element.includes('.')) {
                //If element is a class iterate through items with class
                for (const class_e of document.getElementsByClassName(element.replace('.', ''))) {
                    //Destroy each element
                    class_e.remove();
                }
            }
        }
    }

    //Remove duplicates from the moveables list
    moveables = [...new Set(moveables)];

    //Return list of current moveable elements post-update
    return moveables;
}

function convert_to_object(element) {
    if (typeof (element) == 'object') {
        //If element is an object return it
        return element
    } else {
        if (element.includes('#')) {
            if (document.getElementById(element.replace('#', ''))) {
                //Return element by id
                return document.getElementById(element.replace('#', ''));
            } else {
                return null;
            }
        }
        if (element.includes('.')) {
            //If element is a class return first element with class
            for (const class_e of document.getElementsByClassName(element.replace('.', ''))) {
                return class_e;
            }
        }
    }
}

function touching_object(element_a, element_b) {
    //Convert element_a and element_b to objects
    element_a = convert_to_object(element_a);
    element_b = convert_to_object(element_b);

    //Get bounding rects of each element
    const bounding_a = element_a.getBoundingClientRect();
    const bounding_b = element_b.getBoundingClientRect();

    //Check if overlapping bounding rects
    return !(
        bounding_a.top > bounding_b.bottom ||
        bounding_a.right < bounding_b.left ||
        bounding_a.bottom < bounding_b.top ||
        bounding_a.left > bounding_b.right
    );
}

//Function to move object to mouse
function move_to_mouse(event) {
    attachedObject.blur();
    //Get the offset width & height of the element
    var obj_width = attachedObject.offsetWidth;
    var obj_height = attachedObject.offsetHeight;

    //Center the object x & y using the mouse position and object width / 2 
    var obj_x = event.pageX - (obj_width / 2);
    var obj_y = event.pageY - (obj_height / 2);

    //Set the attached object top & left to the x & y
    attachedObject.style.top = obj_y + "px";
    attachedObject.style.left = obj_x + "px";
}

function attach_to_mouse(event) {
    //Set the attached object as the clicked object
    attachedObject = event.target;

    //Move the object to the mouse by addding an event listener
    document.addEventListener('mousemove', move_to_mouse);
}

function detach_from_mouse() {
    //Remove the move mouse event listener
    document.removeEventListener('mousemove', move_to_mouse);
}

//Create moveable object
class moveable {
    constructor(type) {
        //Set the moveable to an element
        if (typeof (type) == 'string' && type.includes('#')) {
            //If string id then find element by id
            this.element = document.getElementById(type.replace('#', ''));
        } else {
            //If type is not a string or does not contain a '#'
            if (typeof (type) == 'object') {
                //If object set element to the type variable
                this.element = type;
            } else {
                //If an element could not be defined return error
                console.log(`%c Error, Moveable Element Could Not Be Found`, 'color: red;');
                this.element = null;
            }
        }

        //Remove user selection for ease
        this.element.style.userSelect = 'none';
        this.element.style.MozUserSelect = 'none';
        this.element.style.webkitUserSelect = 'none';
    }

    //Allow the object to be dragged
    drag(bool) {
        if (this.element) {
            //If bool is true then object is set to drag
            if (bool == true) {
                //Position is relative
                this.element.style.position = "relative";
                //Add event listeners for drag and drop
                this.element.addEventListener("mousedown", attach_to_mouse);
                document.addEventListener("mouseup", detach_from_mouse);
            } else {
                //Remove event listener for moving the mouse
                document.removeEventListener("mousemove", move_to_mouse);
            }
        }
    }
}

//Function to convert all objects with the moveable=true attribute to moveables
function convert_all_to_moveable() {
    //Loop through all elements with moveable=true attribute
    $("[moveable='true']").each(function () {
        //Convert this to a moveable
        var element = new moveable(this);
        //Set drag to true
        element.drag(true);
    });
}

//Create a text moveable
class TextMoveable {
    constructor(properties) {
        //Create the text

        //Set type to text
        this.type = 'text';

        //Attach a properties var
        this.properties = properties;

        //If a heading type is specified create a heading of that type
        if (properties['heading_type'] != null) {
            this.element = document.createElement(properties.heading_type);
        } else {
            this.element = document.createElement('p'); //Default is paragraph
        }

        //If size is specified set the font size to that
        if (properties['size'] != null) {
            this.element.style.fontSize = properties.size;
        }

        //If color is specified set the color to that
        if (properties['color'] != null) {
            this.element.style.color = properties.color;
        }

        //If text content is specified set the content to that
        if (properties['text_content'] != null) {
            this.element.textContent = properties.text_content;
        } else {
            this.element.textContent = 'New Text'; //Default is 'New Text'
        }

        //Set element type to text
        this.element.type = 'text';

        //Set position to relative so it can be dragged
        this.element.style.position = 'relative';

        //Make the element content editable
        this.element.setAttribute('contenteditable', true);

        //On focus set the caret to show
        this.element.addEventListener('focusin', function () {
            document.body.style.caretColor = 'black';
        });

        //On focus out hide the caret
        this.element.addEventListener('focusout', function () {
            document.body.style.caretColor = 'transparent';
            //If the text has all been deleted remove the element
            if (this.textContent == '') {
                this.remove();
            }
        });

        this.element.setAttribute('moveable', true); //Make it a moveable

        //Add to canvas
        document.getElementById('canvas').appendChild(this.element);

        //Turn it into the moveable object
        this.moveable_element = new moveable(this.element);
    }

    //Allow the object to be dragged
    drag(bool) {
        this.moveable_element.drag(bool);
    }
}

//Create an image moveable
class ImageMovable {
    constructor(properties) {
        //Set type to image
        this.type = 'image';

        //Create the image
        this.element = document.createElement('img');

        //Set element type to image
        this.element.type = 'image';

        //Attach a properties var
        this.properties = properties;

        const real_this = this; //This is manipulated around thus we must keep a copy

        //Set width and height
        this.element.style.width = properties.width;
        this.element.style.height = properties.height;

        //If src is 'browse' immediately open file reader
        if (properties['src'] == 'browse') {
            this.element.style.color = properties.color;
        }
        //If the src is an actual src
        else {
            this.element.setAttribute('src', properties.src)
        }

        //Set position to relative so it can be dragged
        this.element.style.position = 'relative';

        //Prevent ghost image on drag
        this.element.setAttribute('draggable', false);

        this.element.setAttribute('moveable', true); //Make it a moveable

        var image = this.element;

        //Add to canvas
        document.getElementById('canvas').appendChild(this.element);

        //Browse input
        var input = document.createElement('input');

        input.type = 'file'; //Set it to file input

        input.style.display = 'none'; //Hide it

        //On double click browse image
        this.element.addEventListener('dblclick', function (e) {
            real_this.browse(input);
        });

        input.addEventListener('change', function () { //On input change
            if (input.files && input.files[0]) {
                this.reader = new FileReader(); //Initialize file reader 

                this.reader.onload = function (event) {
                    image.setAttribute('src', event.target.result); //On reader loaded set the src of image to the result
                }

                this.reader.readAsDataURL(input.files[0]); //Read the files
            }
        });

        //Turn it into the moveable object
        this.moveable_element = new moveable(this.element);
    }

    //Allow the object to be dragged
    drag(bool) {
        this.moveable_element.drag(bool);
    }

    browse(input) {
        input.click(); //Trigger click of the browse input
    }
}

function move_to_mouse_by_event(object, e){
    var obj_width = object.element.offsetWidth;
    var obj_height = object.element.offsetHeight;

    var obj_x = e.pageX - (obj_width / 2);
    var obj_y = e.pageY - (obj_height / 2);
    object.element.style.top = obj_y + "px";
    object.element.style.left = obj_x + "px";
}

//Clone a moveable object
function clone_moveable(e, input, properties) {
    if (input.type == 'image') {
        var new_image = new ImageMovable(properties);

        new_image.drag(true);

        new_image.element.dispatchEvent( new Event('mousedown') );

        move_to_mouse_by_event(new_image, e);
    }
    if (input.type == 'text') {
        var new_text = new TextMoveable(properties);

        new_text.drag(true);

        new_text.element.dispatchEvent( new Event('mousedown') );

        move_to_mouse_by_event(new_text, e);
    }
}

//A moveable that cannot be moved however creates new moveables upon click
class RootMovable {
    constructor(input) {
        input.element.style.position = 'static';
        input.element.id = 'parent';

        input.element.addEventListener('mousedown', function () {
            clone_moveable(event, this, input.properties)
        });
    }
}
