/**
 * register-all.js — 集中注册所有 UI 模块
 *
 * 调用 registerAllModules() 后，所有模块工厂被注册到 ModuleRegistry。
 * 随后由 drawer.js 在面板容器就绪后调用 registry.mountAll(ctx) 完成挂载。
 *
 * 注册顺序即挂载顺序 —— DOM 中面板的排列取决于此。
 */

import registry from './ModuleRegistry.js';

import AdditionalFeaturesModule from './AdditionalFeaturesModule.js';
import HistoriographyModule from './HistoriographyModule.js';
import HanlinyuanModule from './HanlinyuanModule.js';
import TableModule from './TableModule.js';
import PlotOptModule from './PlotOptModule.js';
import GlossaryModule from './GlossaryModule.js';
import ApiConfigModule from './ApiConfigModule.js';
import RuleConfigModule from './RuleConfigModule.js';

export function registerAllModules() {
    registry.register('AdditionalFeatures', () => new AdditionalFeaturesModule());
    registry.register('Historiography',     () => new HistoriographyModule());
    registry.register('Hanlinyuan',          () => new HanlinyuanModule());
    registry.register('Table',               () => new TableModule());
    registry.register('PlotOptimization',    () => new PlotOptModule());
    registry.register('Glossary',            () => new GlossaryModule());
    registry.register('ApiConfig',           () => new ApiConfigModule());
    registry.register('RuleConfig',          () => new RuleConfigModule());
}
