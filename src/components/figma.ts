import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFigmaElement } from '@aracna/icons-feather-web/elements/figma-element'

export const IconFeatherFigma: ElementComponent<IconFeatherFigmaElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFigmaElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-figma', IconFeatherFigmaElement)
