import { Logger as ExternalLogger } from "logmatic"

export function Logger(name) {
    return new ExternalLogger(name); // Add some options, maybe?
}