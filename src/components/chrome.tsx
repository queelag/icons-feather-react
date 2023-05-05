import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChromeElement } from '@aracna/icons-feather-web/elements/chrome-element.js'

export const IconFeatherChrome: ElementComponent<IconFeatherChromeElement, IconProps> = createBaseElementComponent<
  IconFeatherChromeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chrome', IconFeatherChromeElement)
