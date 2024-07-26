const { default: ClassRoom } = require("./0-classroom");

export default function initializeRooms() {
    return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)]
} 