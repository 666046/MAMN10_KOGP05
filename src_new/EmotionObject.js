class EmotionObject{
    constructor() {
        this.emotionsObject = [];
        
    }
    
    addEmotion(id, emotion, boolean){
        let tempEmotionObject = {};
        tempEmotionObject.id = id;
        tempEmotionObject.emotion = emotion;
        tempEmotionObject.boolean = boolean
        this.emotionsObject.push(tempEmotionObject); 
    }
     
}

export default EmotionObject;