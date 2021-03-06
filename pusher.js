// Copyright 2015 Cutehacks AS. All rights reserved.
// License can be found in the LICENSE file.

.pragma library

function Event(message, data) {
    if (data) {
        this.event = message;
        this.data = data;
    } else {
        try {
            var msg = JSON.parse(message);
            this.event = msg.event;
            this.channel = msg.channel;
            if (msg.data) {
                try {
                    msg.data = JSON.parse(msg.data);
                } catch (e) { }
            }
            this.data = msg.data;
        } catch (e) {
            this.event = message;
        }
    }
}

function warn(arg1, arg2) {
    console.warn(arg1, arg2);
}

function requiresAuth(name) {
    var isPrivate = name.indexOf("private-") === 0;
    var isPresence = name.indexOf("presence-") === 0;
    return isPrivate || isPresence;
}

