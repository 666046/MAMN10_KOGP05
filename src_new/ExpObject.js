class ExpObject{
    constructor() {
        this.expObject = [{expOne: []}, {expTwo: []}, {expThree: []}];
        
    }
    
    addEmotionObject(expNumber, emotionObject){
        if (expNumber == 1){
            this.expObject.expOne.push(emotionObject);

        }else if (expNumber == 2){
            this.expObject.expTwo.push(emotionObject);

        }else if (expNumber == 3){
            this.expObject.expThree.push(emotionObject);

        }
    }
     
}

export default ExpObject;