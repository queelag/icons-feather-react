import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowLeftElement } from '@aracna/icons-feather-web/elements/arrow-left-element'

export const IconFeatherArrowLeft: ElementComponent<IconFeatherArrowLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowLeftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-left', IconFeatherArrowLeftElement)
