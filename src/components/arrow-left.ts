import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowLeftElement } from '@aracna/icons-feather-web/elements/arrow-left-element'

export const IconFeatherArrowLeft: ElementComponent<IconFeatherArrowLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-left', IconFeatherArrowLeftElement)
