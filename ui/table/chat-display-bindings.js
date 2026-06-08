export function bindChatTableDisplaySetting({
    getLiveExtensionSettings,
    saveSettingsDebounced,
    log,
}) {
    const settings = getLiveExtensionSettings();
    const showInChatToggle = document.getElementById('show-table-in-chat-toggle');

    if (!showInChatToggle) {
        log('Chat table display toggle not found, skip binding.', 'warn');
        return;
    }

    showInChatToggle.checked = settings.show_table_in_chat === true;

    showInChatToggle.addEventListener('change', () => {
        const currentSettings = getLiveExtensionSettings();
        currentSettings.show_table_in_chat = showInChatToggle.checked;
        saveSettingsDebounced();
        toastr.info(`Chat table display ${showInChatToggle.checked ? 'enabled' : 'disabled'}.`);
    });

    log('Chat table display settings bound.', 'success');
}
