import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronUpElement } from '@aracna/icons-feather-web/elements/chevron-up-element'

export const IconFeatherChevronUp: ElementComponent<IconFeatherChevronUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronUpElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevron-up', IconFeatherChevronUpElement)
