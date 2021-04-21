import 'styles/overlayscrollbars.scss';
import './index.scss';

import { resize } from '@/testing-browser/Resize';
import { generateClassChangeSelectCallback, iterateSelect } from '@/testing-browser/Select';
import { OverlayScrollbars } from 'overlayscrollbars';
import { from, style } from 'support';

const targetElm = document.querySelector('#target') as HTMLElement;
const osInstance = (window.os = OverlayScrollbars({ target: targetElm, content: true }));

const target: HTMLElement | null = document.querySelector('#target');
const comparison: HTMLElement | null = document.querySelector('#comparison');
const targetRes: HTMLElement | null = document.querySelector('#target .resize');
const comparisonRes: HTMLElement | null = document.querySelector('#comparison .resize');

const resizeElms = document.querySelectorAll('.resize');
const percentElms = document.querySelectorAll('.percent');
const endElms = document.querySelectorAll('.end');
const envElms = document.querySelectorAll<HTMLElement>('.env');
const containerElms = document.querySelectorAll<HTMLElement>('#target, #comparison');

resize(target!).addResizeListener((width, height) => style(comparison, { width, height }));
//resize(comparison!).addResizeListener((width, height) => style(target, { width, height }));
resize(targetRes!).addResizeListener((width, height) => style(comparisonRes, { width, height }));
//resize(comparisonRes!).addResizeListener((width, height) => style(targetRes, { width, height }));

target!.querySelector('.os-viewport')?.addEventListener('scroll', (e) => {
  const viewport: HTMLElement | null = e.currentTarget as HTMLElement;
  comparison!.scrollLeft = viewport.scrollLeft;
  comparison!.scrollTop = viewport.scrollTop;
});

const envWidthSelect = document.querySelector<HTMLSelectElement>('#envWidth');
const envHeightSelect = document.querySelector<HTMLSelectElement>('#envHeight');
const selectCallbackEnv = generateClassChangeSelectCallback(from(envElms));
const containerWidthSelect = document.querySelector<HTMLSelectElement>('#width');
const containerHeightSelect = document.querySelector<HTMLSelectElement>('#height');
const containerFloatSelect = document.querySelector<HTMLSelectElement>('#float');
const containerPaddingSelect = document.querySelector<HTMLSelectElement>('#padding');
const containerBorderSelect = document.querySelector<HTMLSelectElement>('#border');
const containerMarginSelect = document.querySelector<HTMLSelectElement>('#margin');
const containerBoxSizingSelect = document.querySelector<HTMLSelectElement>('#boxSizing');
const containerDirectionSelect = document.querySelector<HTMLSelectElement>('#direction');
const containerMinMaxSelect = document.querySelector<HTMLSelectElement>('#minMax');
const selectCallbackContainer = generateClassChangeSelectCallback(from(containerElms));

envWidthSelect?.addEventListener('change', selectCallbackEnv);
envHeightSelect?.addEventListener('change', selectCallbackEnv);
containerWidthSelect?.addEventListener('change', selectCallbackContainer);
containerHeightSelect?.addEventListener('change', selectCallbackContainer);
containerFloatSelect?.addEventListener('change', selectCallbackContainer);
containerPaddingSelect?.addEventListener('change', selectCallbackContainer);
containerBorderSelect?.addEventListener('change', selectCallbackContainer);
containerMarginSelect?.addEventListener('change', selectCallbackContainer);
containerBoxSizingSelect?.addEventListener('change', selectCallbackContainer);
containerDirectionSelect?.addEventListener('change', selectCallbackContainer);
containerMinMaxSelect?.addEventListener('change', selectCallbackContainer);

selectCallbackEnv(envWidthSelect);
selectCallbackEnv(envHeightSelect);
selectCallbackContainer(containerWidthSelect);
selectCallbackContainer(containerHeightSelect);
selectCallbackContainer(containerFloatSelect);
selectCallbackContainer(containerPaddingSelect);
selectCallbackContainer(containerBorderSelect);
selectCallbackContainer(containerMarginSelect);
selectCallbackContainer(containerBoxSizingSelect);
selectCallbackContainer(containerDirectionSelect);
selectCallbackContainer(containerMinMaxSelect);
