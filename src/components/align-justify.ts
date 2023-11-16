import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlignJustifyElement } from '@aracna/icons-feather-web/elements/align-justify-element'

export const IconFeatherAlignJustify: ElementComponent<IconFeatherAlignJustifyElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlignJustifyElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-align-justify', IconFeatherAlignJustifyElement)
