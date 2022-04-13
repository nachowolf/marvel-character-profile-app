export function ToolingService(){

    

    function randomQuoteAboutBeingLost(){
        return messages[Math.floor(Math.random() * messages.length)]
    }

    return{
        randomQuoteAboutBeingLost
    }


}

const messages = [
    "Hey there! Looks like you might have mistyped the url or we deleted it, but let's just agree this is somehow your fault.",
    "Greetings traveller! I think your request might be faulty, could you double check and try again?",
    "No your result is not invisible, it might just need some tweaking. Wanna do that and try again?",
    "Faulty api requests... am I right? Maybe try a different request?",
    "Whaaattttt?????"

]