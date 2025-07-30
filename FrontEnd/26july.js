/* 
    ✅ Purpose of setTimeout(fn, 0)
        It is used to defer execution of a function until the current call stack is clear.

    🔄 What does that mean?
        When JavaScript runs, it uses a single-threaded model and maintains a call stack to keep track of function calls. If you call a function directly, it executes immediately. But if you use setTimeout(fn, 0), it puts fn at the end of the event queue, allowing the browser to finish current tasks before running it.

*/