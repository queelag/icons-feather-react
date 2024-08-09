import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChromeElement } from '@aracna/icons-feather-web/elements/chrome-element'

export const IconFeatherChrome: ElementComponent<IconFeatherChromeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChromeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chrome', IconFeatherChromeElement)
