import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronDownElement } from '@aracna/icons-feather-web/elements/chevron-down-element'

export const IconFeatherChevronDown: ElementComponent<IconFeatherChevronDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronDownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevron-down', IconFeatherChevronDownElement)
