/**
 * Documentation Reference
 * https://api.slack.com/reference/block-kit/block-elements
 */

import {
    Text,
    Plain,
    ConfirmationDialog,
    Option,
    OptionGroup,
    FilterConversations
} from "./composition-objects";

export interface ActionableElement {
    action_id?: string;
}

export interface ButtonElement extends ActionableElement {
    type: "button";
    text: Text<Plain>;
    url?: string;
    value?: string;
    style?: "default" | "primary" | "danger";
    confirm?: ConfirmationDialog;
}

export interface CheckboxGroups extends ActionableElement {
    type: "checkboxes";
    options: Option[];
    initial_options?: Option[];
    confirm?: ConfirmationDialog;
}

export interface DatepickerElement extends ActionableElement {
    type: "datepicker";
    placeholder?: Text<Plain>;
    initial_date?: string;
    confirm?: ConfirmationDialog;
}

export interface ImageElement {
    type: "image";
    image_url: string;
    alt_text: string;
}

export interface StaticMultiSelectMenuElement extends ActionableElement {
    type: "multi_static_select";
    placeholder: Text<Plain>;
    options: Option[];
    option_groups?: OptionGroup[];
    initial_options: Option[];
    max_selected_items?: number;
    confirm?: ConfirmationDialog;
}

export interface DynamicMultiSelectMenuElement extends ActionableElement {
    type: "multi_external_select";
    placeholder: Text<Plain>;
    min_query_length?: number;
    initial_options?: Option[];
    max_selected_items?: number;
    confirm?: ConfirmationDialog;
}

export interface MultiSelectUsers extends ActionableElement {
    type: "multi_users_select";
    placeholder: Text<Plain>;
    initial_users?: string[];
    max_selected_items?: number;
    confirm?: ConfirmationDialog;
}

export interface MultiSelectConversations extends ActionableElement {
    type: "multi_conversations_select";
    placeholder: Text<Plain>;
    initial_conversations?: string[];
    max_selected_items?: number;
    filter?: FilterConversations;
    confirm?: ConfirmationDialog;
}

export interface MultiSelectChannels extends ActionableElement {
    type: "multi_channels_select";
    placeholder: Text<Plain>;
    initial_channels?: string[];
    max_selected_items?: number;
    confirm?: ConfirmationDialog;
}

export interface OverflowElement extends ActionableElement {
    type: "overflow";
    options: Option[];
    confirm?: ConfirmationDialog;
}

export interface PlainTextInput extends ActionableElement {
    type: "plain_text_input";
    placeholder: Text<Plain>;
    initial_value?: string;
    multiline?: boolean;
    min_length?: number;
    max_length?: number;
}

export interface RadioButtonGroup extends ActionableElement {
    type: "radio_buttons";
    options: Option[];
    initial_option?: Option;
    confirm?: ConfirmationDialog;
}

export interface StaticSelectMenuElement extends ActionableElement {
    type: "static_select";
    placeholder: Text<Plain>;
    options: Option[];
    option_groups?: OptionGroup[];
    initial_option: Option;
    confirm?: ConfirmationDialog;
}

export interface DynamicSelectMenuElement extends ActionableElement {
    type: "external_select";
    placeholder: Text<Plain>;
    min_query_length?: number;
    initial_option?: Option;
    confirm?: ConfirmationDialog;
}

export interface SelectUsers extends ActionableElement {
    type: "users_select";
    placeholder: Text<Plain>;
    initial_user?: string;
    confirm?: ConfirmationDialog;
}

export interface SelectConversations extends ActionableElement {
    type: "conversations_select";
    placeholder: Text<Plain>;
    initial_conversation?: string;
    response_url_enabled?: boolean;
    filter?: FilterConversations;
    confirm?: ConfirmationDialog;
}

export interface SelectChannels extends ActionableElement {
    type: "channels_select";
    placeholder: Text<Plain>;
    initial_channel?: string;
    confirm?: ConfirmationDialog;
    response_url_enabled?: boolean;
}

export type MultiSelectMenus =
    | StaticMultiSelectMenuElement
    | DynamicMultiSelectMenuElement
    | MultiSelectUsers
    | MultiSelectConversations
    | MultiSelectChannels;

export type SelectMenus =
    | StaticSelectMenuElement
    | DynamicSelectMenuElement
    | SelectUsers
    | SelectConversations
    | SelectChannels;

export type Elements =
    | ButtonElement
    | CheckboxGroups
    | DatepickerElement
    | ImageElement
    | MultiSelectMenus
    | OverflowElement
    | PlainTextInput
    | RadioButtonGroup
    | SelectMenus;
