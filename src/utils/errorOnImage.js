import  not_found from '@images/not_found_api.jpg'

export const errorOnImage = (e) => {
    e.target.src = not_found
}