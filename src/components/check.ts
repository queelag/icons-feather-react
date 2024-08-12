import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCheckElement } from '@aracna/icons-feather-web/elements/check-element'

export const IconFeatherCheck: ElementComponent<IconFeatherCheckElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCheckElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-check', IconFeatherCheckElement)
