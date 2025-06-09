//we can use these variables and functions in any js files we have
//we just need to import them

export const PI = 3.14159; //export keyword is needed, so that we can export these elsewhere

export function getCircumference(radius){
    return 2 *PI * radius;
}

export function getArea(radius){
    return PI * radius *radius;
}

export function getVolume(radius){
    return (4/3) * PI * radius * radius * radius;
} 