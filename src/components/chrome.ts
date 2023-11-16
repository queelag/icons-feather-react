import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChromeElement } from '@aracna/icons-feather-web/elements/chrome-element'

export const IconFeatherChrome: ElementComponent<IconFeatherChromeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChromeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chrome', IconFeatherChromeElement)
