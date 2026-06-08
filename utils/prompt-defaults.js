const DEFAULT_ORDERS = {
    optimization: ['mainPrompt', 'systemPrompt', 'worldbook', 'history', 'fillingMode'],
    plot_optimization: ['mainPrompt', 'systemPrompt', 'worldbook', 'tableEnabled', 'contextLimit', 'coreContent'],
    small_summary: ['jailbreakPrompt', 'summaryPrompt', 'coreContent'],
    large_summary: ['jailbreakPrompt', 'summaryPrompt', 'coreContent'],
    novel_processor: ['existingLore', 'chapterContent'],
    batch_filler: ['worldbook', 'ruleTemplate', 'flowTemplate', 'coreContent'],
    reorganizer: ['flowTemplate'],
    secondary_filler: ['worldbook', 'contextHistory', 'ruleTemplate', 'flowTemplate', 'coreContent'],
};

export async function getPresetPrompts() {
    return [];
}

export function getMixedOrder(type) {
    return (DEFAULT_ORDERS[type] || []).map(id => ({ type: 'conditional', id }));
}
