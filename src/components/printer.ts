import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPrinterElement } from '@aracna/icons-feather-web/elements/printer-element'

export const IconFeatherPrinter: ElementComponent<IconFeatherPrinterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPrinterElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-printer', IconFeatherPrinterElement)
