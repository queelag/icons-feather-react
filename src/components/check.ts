import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCheckElement } from '@aracna/icons-feather-web/elements/check-element'

export const IconFeatherCheck: ElementComponent<IconFeatherCheckElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCheckElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-check', IconFeatherCheckElement)
