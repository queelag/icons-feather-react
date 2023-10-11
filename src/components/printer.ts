import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPrinterElement } from '@aracna/icons-feather-web/elements/printer-element'

export const IconFeatherPrinter: ElementComponent<IconFeatherPrinterElement, IconProps> = createBaseElementComponent<
  IconFeatherPrinterElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-printer', IconFeatherPrinterElement)
