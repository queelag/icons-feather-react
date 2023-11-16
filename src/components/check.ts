import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCheckElement } from '@aracna/icons-feather-web/elements/check-element'

export const IconFeatherCheck: ElementComponent<IconFeatherCheckElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCheckElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-check', IconFeatherCheckElement)
