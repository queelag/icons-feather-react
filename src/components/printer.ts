import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPrinterElement } from '@aracna/icons-feather-web/elements/printer-element'

export const IconFeatherPrinter: ElementComponent<IconFeatherPrinterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPrinterElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-printer', IconFeatherPrinterElement)
