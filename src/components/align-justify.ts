import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlignJustifyElement } from '@aracna/icons-feather-web/elements/align-justify-element'

export const IconFeatherAlignJustify: ElementComponent<IconFeatherAlignJustifyElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlignJustifyElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-align-justify', IconFeatherAlignJustifyElement)
