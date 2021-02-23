$(document).ready(() => { 
    //add click event to btn (submit wasn't working for me..)
    $('#btn').on('click', (ev) => {
        ev.preventDefault();

        // gather values from user input
        let $movie = $('.movieForm').eq(0).val();
        let $rating = $('.movieForm').eq(1).val();

        // generate ul el with the correspoding user input
        let $submission = $('<ul>').html(`${$movie} is a ${$rating} out of 10 </ul>`)

        //add delete event
        // could I have added this event to the parent 'ol' instead?
        let $deleteBtn = $('<input>').addClass('deleteSub').prop('type', 'button').prop('value', 'x').on('click', (ev) => {
            $submission.remove();
        });

        // append to doc
        $('.submissions').append($submission.append($deleteBtn));
    })
})
