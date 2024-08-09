import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTargetElement } from '@aracna/icons-feather-web/elements/target-element'

export const IconFeatherTarget: ElementComponent<IconFeatherTargetElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTargetElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-target', IconFeatherTargetElement)
