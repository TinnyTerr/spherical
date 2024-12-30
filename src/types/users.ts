export interface PartialUser {
    id: string;
    username: string;
    admin: boolean;
    getFullDetails(): this is User;
}

export interface User {
    /**
     * The user's ID.
     * @type {string}
     * @example ```js
     * User.id = (await import("crypto")).randomUUID() // => '153dec10-9533-47f2-9cff-0554ecb297f7'
     * ```
     */
    id: string;
    /**
     * The user's username.
     * @type {string}
     * @throws {Error} If the username is not within 2 and 32 characters.
     * @throws {Error} If the username is not in UTF-8 formatting.
     */
    username: string;
    /**
     * The user's display name.
     * @type {string}
     * @note This is {@link User.username} if none set.
     * @throws {Error} If the username is not within 2 and 32 characters.
     * @throws {Error} If the username is not in UTF-8 formatting.
     */
    display: string;
    /**
     * The user's avatar url.
     * @type {string}
     * @example "https://i-have-to.typescript.love/tintytiner/bncvznfp.png"
     */
    avatar: string;
    /**
     * The user's email.
     * @type {string}
     */
    email: CouldBeHidden<string>;
    verified: boolean;
    bot: boolean;
    system: boolean;
    mfaEnabled: PersonalDetail<string>;
    mobile: boolean;
    desktop: boolean;
    phone: PersonalDetail<string>;
    admin: PersonalDetail<boolean>;
}

/**
 * A detail null when the user accessing the data is not the same as the user the data is about.
 */
type PersonalDetail<T> = T | null;

/**
 * A detail that could be hidden specifically by the user.
 */
type CouldBeHidden<T> = T | null;