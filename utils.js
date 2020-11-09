const getActiveSlide = (db) => {
    var activeSlideId = db.get('activeSlideId').value()
    var activeSlide = db.get('slides').find({ id: activeSlideId }).value()
    return JSON.stringify(activeSlide)
}

const previousSlide = (db) => {
    var activeSlideId = db.get('activeSlideId').value()
    if(activeSlideId != 1) {
        activeSlideId -= 1
        db.set('activeSlideId', activeSlideId).value()
    }
    var activeSlide = db.get('slides').find({ id: activeSlideId }).value()
    return JSON.stringify(activeSlide)
}

const nextSlide = (db) => {
    var activeSlideId = db.get('activeSlideId').value()
    var lastSlideId = db.get('slides').value().length
    if(activeSlideId != lastSlideId) {
        activeSlideId += 1
        db.set('activeSlideId', activeSlideId).value()
    }
    var activeSlide = db.get('slides').find({ id: activeSlideId }).value()
    return JSON.stringify(activeSlide)
}

exports.getActiveSlide = getActiveSlide
exports.previousSlide = previousSlide
exports.nextSlide = nextSlide