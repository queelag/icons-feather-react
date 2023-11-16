import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFigmaElement } from '@aracna/icons-feather-web/elements/figma-element'

export const IconFeatherFigma: ElementComponent<IconFeatherFigmaElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFigmaElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-figma', IconFeatherFigmaElement)
