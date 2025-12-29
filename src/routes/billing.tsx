import { useLanguage } from '@/contexts/language-context';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
	CreditCard, 
	FileText, 
	Download,
	ArrowRight,
} from 'lucide-react';

export default function BillingPage() {
	const { t } = useLanguage();
	const navigate = useNavigate();

	// Mock invoice data - replace with actual API call
	const invoices = [
		{
			id: '1',
			date: new Date('2025-01-15'),
			amount: 0,
			status: 'paid',
			plan: 'Free'
		}
	];

	return (
		<div className="min-h-screen bg-bg-3">
			<div className="container mx-auto px-4 py-8 max-w-4xl">
				<div className="mb-8">
					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
						{t('pages.account.billing.h1')}
					</h1>
					<p className="text-lg text-gray-600">
						Manage your subscription and payment methods
					</p>
				</div>

				{/* Current Plan */}
				<Card className="mb-8">
					<CardHeader>
						<CardTitle>{t('pages.account.billing.currentPlan')}</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-xl font-semibold mb-2">Free Plan</h3>
								<p className="text-sm text-gray-600">
									0 S.R. / month
								</p>
							</div>
							<Button 
								onClick={() => navigate('/pricing')}
								className="gap-2"
							>
								{t('pages.account.billing.managePlan')}
								<ArrowRight className="h-4 w-4" />
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* Payment Method */}
				<Card className="mb-8">
					<CardHeader>
						<CardTitle>{t('pages.account.billing.paymentMethod')}</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<CreditCard className="h-5 w-5 text-gray-400" />
								<div>
									<p className="font-medium">No payment method</p>
									<p className="text-sm text-gray-600">
										Add a payment method to upgrade your plan
									</p>
								</div>
							</div>
							<Button variant="outline" size="sm">
								Add Payment Method
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* Invoices */}
				<Card>
					<CardHeader>
						<CardTitle>{t('pages.account.billing.invoices')}</CardTitle>
					</CardHeader>
					<CardContent>
						{invoices.length > 0 ? (
							<div className="space-y-4">
								{invoices.map((invoice) => (
									<div 
										key={invoice.id}
										className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
									>
										<div className="flex items-center gap-4">
											<FileText className="h-5 w-5 text-gray-400" />
											<div>
												<p className="font-medium">
													{invoice.plan} Plan - {invoice.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
												</p>
												<p className="text-sm text-gray-600">
													{invoice.date.toLocaleDateString()}
												</p>
											</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-right">
												<p className="font-semibold">
													{invoice.amount} S.R.
												</p>
												<Badge 
													variant={invoice.status === 'paid' ? 'default' : 'secondary'}
													className="mt-1"
												>
													{invoice.status}
												</Badge>
											</div>
											<Button variant="outline" size="sm" className="gap-2">
												<Download className="h-4 w-4" />
												{t('pages.account.billing.downloadInvoice')}
											</Button>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="text-center py-8">
								<FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
								<p className="text-gray-600">No invoices yet</p>
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

