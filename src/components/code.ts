import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCodeElement } from '@aracna/icons-feather-web/elements/code-element'

export const IconFeatherCode: ElementComponent<IconFeatherCodeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCodeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-code', IconFeatherCodeElement)
