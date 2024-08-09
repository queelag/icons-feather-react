import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronUpElement } from '@aracna/icons-feather-web/elements/chevron-up-element'

export const IconFeatherChevronUp: ElementComponent<IconFeatherChevronUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronUpElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevron-up', IconFeatherChevronUpElement)
